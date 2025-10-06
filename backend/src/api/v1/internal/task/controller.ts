/**
 * @summary
 * Task creation API controller.
 * Handles HTTP POST requests for creating new tasks.
 *
 * @controller TaskController
 * @schema functional
 * @type api-controller
 *
 * @endpoints
 * - POST /api/v1/internal/task
 */

import { Response, NextFunction } from 'express';
import { z } from 'zod';
import { AuthenticatedRequest } from '@/middleware/authMiddleware';
import { successResponse, errorResponse } from '@/utils/response';
import { HTTP_STATUS } from '@/constants/http';
import { sanitizeString } from '@/utils/sanitization';
import { taskCreate } from '@/services/task';

/**
 * @validation Request body schema for task creation
 */
const createTaskSchema = z.object({
  title: z.string().min(1, 'titleRequired').max(255, 'titleMaxLengthExceeded'),
  description: z.string().max(1000, 'descriptionMaxLengthExceeded').optional().nullable(),
});

/**
 * @api {post} /api/v1/internal/task Create Task
 * @apiName CreateTask
 * @apiGroup Task
 * @apiVersion 1.0.0
 *
 * @apiDescription Creates a new task with the specified parameters
 *
 * @apiParam {String} title Task title (required, max 255 characters)
 * @apiParam {String} [description] Task description (optional, max 1000 characters)
 *
 * @apiSuccess {String} id Task identifier (UUID)
 * @apiSuccess {String} title Task title
 * @apiSuccess {String} description Task description
 * @apiSuccess {Number} status Task status (0=Pendente)
 * @apiSuccess {Date} dateCreated Creation timestamp
 *
 * @apiError {String} ValidationError Invalid parameters provided
 * @apiError {String} UnauthorizedError User lacks authentication
 * @apiError {String} ServerError Internal server error
 */
export async function postHandler(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    /**
     * @validation Validate authentication
     */
    if (!req.user) {
      res
        .status(HTTP_STATUS.UNAUTHORIZED)
        .json(errorResponse('AUTHENTICATION_ERROR', 'authenticationRequired'));
      return;
    }

    /**
     * @validation Validate request body
     */
    const validationResult = createTaskSchema.safeParse(req.body);

    if (!validationResult.success) {
      res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json(errorResponse('VALIDATION_ERROR', 'validationFailed', validationResult.error.issues));
      return;
    }

    const { title, description } = validationResult.data;

    /**
     * @rule {SE-001} Sanitize user input to prevent XSS
     */
    const sanitizedTitle = sanitizeString(title);
    const sanitizedDescription = description ? sanitizeString(description) : null;

    /**
     * @rule {BR-001, BR-002} Create task with business rules
     */
    const createdTask = await taskCreate({
      idAccount: req.user.idAccount,
      idUser: req.user.idUser,
      title: sanitizedTitle,
      description: sanitizedDescription,
    });

    /**
     * @output Success response with created task
     */
    res
      .status(HTTP_STATUS.CREATED)
      .header('Location', `/api/v1/internal/task/${createdTask.id}`)
      .json(successResponse(createdTask));
  } catch (error: any) {
    /**
     * @errorHandling Handle specific business errors
     */
    if (error.message === 'titleRequired') {
      res.status(HTTP_STATUS.BAD_REQUEST).json(errorResponse('VALIDATION_ERROR', 'titleRequired'));
      return;
    }

    if (error.message === 'titleMaxLengthExceeded') {
      res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json(errorResponse('VALIDATION_ERROR', 'titleMaxLengthExceeded'));
      return;
    }

    if (error.message === 'descriptionMaxLengthExceeded') {
      res
        .status(HTTP_STATUS.BAD_REQUEST)
        .json(errorResponse('VALIDATION_ERROR', 'descriptionMaxLengthExceeded'));
      return;
    }

    /**
     * @errorHandling Pass unexpected errors to global handler
     */
    next(error);
  }
}
