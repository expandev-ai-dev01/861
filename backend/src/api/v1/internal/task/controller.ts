/**
 * @summary
 * Task creation controller handling HTTP POST requests for creating new tasks.
 * Implements validation, sanitization, and business logic for task creation.
 *
 * @api {post} /api/v1/internal/task Create Task
 * @apiName CreateTask
 * @apiGroup Task
 * @apiVersion 1.0.0
 *
 * @apiDescription Creates a new task with title and optional description
 *
 * @apiParam {String} title Task title (required, max 255 characters)
 * @apiParam {String} [description] Task description (optional, max 1000 characters)
 *
 * @apiSuccess {String} taskId Generated task identifier
 * @apiSuccess {String} title Task title
 * @apiSuccess {String} description Task description
 * @apiSuccess {String} status Task status (always 'Pendente' for new tasks)
 * @apiSuccess {String} creationDate Task creation timestamp
 *
 * @apiError {String} ValidationError Invalid parameters provided
 * @apiError {String} UnauthorizedError User lacks permission
 * @apiError {String} ServerError Internal server error
 */

import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { createError } from '@/middleware/errorMiddleware';
import { successResponse } from '@/utils/response';
import { taskCreate } from '@/services/task';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const window = new JSDOM('').window;
const purify = DOMPurify(window);

/**
 * @validation Request body schema for task creation
 * @rule {be-validation-patterns} Validate title and description fields
 */
const bodySchema = z.object({
  title: z.string().min(1, 'titleRequired').max(255, 'titleMaxLength').trim(),
  description: z
    .string()
    .max(1000, 'descriptionMaxLength')
    .optional()
    .nullable()
    .transform((val) => val || null),
});

/**
 * @handler postHandler
 * @summary Creates a new task with validated and sanitized input
 *
 * @rule {be-api-controller-structure} Standard Express controller pattern
 * @rule {be-parameter-validation-pattern} Validate all input parameters
 * @rule {be-error-handling-pattern} Proper error handling with try-catch
 */
export async function postHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    /**
     * @validation Validate request body against schema
     * @throw {ValidationError}
     */
    const validationResult = bodySchema.safeParse(req.body);

    if (!validationResult.success) {
      const errors = validationResult.error.issues.map((err) => ({
        field: err.path.join('.'),
        message: err.message,
      }));

      return next(createError('Validation failed', 400, 'VALIDATION_ERROR', errors));
    }

    const { title, description } = validationResult.data;

    /**
     * @rule {be-security-patterns} Sanitize user input to prevent XSS
     */
    const sanitizedTitle = purify.sanitize(title, { ALLOWED_TAGS: [] });
    const sanitizedDescription = description
      ? purify.sanitize(description, { ALLOWED_TAGS: [] })
      : null;

    /**
     * @rule {be-service-layer-architecture} Call service layer for business logic
     */
    const task = await taskCreate({
      title: sanitizedTitle,
      description: sanitizedDescription,
    });

    /**
     * @output {TaskCreated, 1, n}
     * @column {String} taskId - Generated task identifier
     * @column {String} title - Task title
     * @column {String} description - Task description
     * @column {String} status - Task status
     * @column {String} creationDate - Creation timestamp
     */
    res.status(201).json(
      successResponse(task, {
        timestamp: new Date().toISOString(),
      })
    );
  } catch (error: any) {
    /**
     * @rule {be-error-handling-pattern} Handle errors with proper status codes
     */
    if (error.code === 'BUSINESS_RULE_ERROR') {
      return next(createError(error.message, 400, error.code));
    }

    next(error);
  }
}
