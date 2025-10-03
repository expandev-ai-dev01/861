import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import {
  CrudController,
  errorResponse,
  StatusGeneralError,
  successResponse,
} from '@/middleware/crud';
import { taskCreate } from '@/services/task';
import { zName, zNullableDescription } from '@/utils/zodValidation';

const securable = 'TASK';

/**
 * @summary
 * Creates a new task with title and optional description.
 * Sets default status to 'Pendente' and generates system fields.
 *
 * @procedure postHandler
 * @schema functional
 * @type stored-procedure
 *
 * @endpoints
 * - POST /api/v1/internal/task
 *
 * @parameters
 * @param {string} title
 *   - Required: Yes
 *   - Description: Task title (max 255 characters)
 *
 * @param {string} description
 *   - Required: No
 *   - Description: Task description (max 1000 characters)
 *
 * @testScenarios
 * - Valid creation with title only
 * - Valid creation with title and description
 * - Security validation failure scenarios
 * - Title validation failure (empty, too long)
 * - Description validation failure (too long)
 * - Error handling and transaction rollback
 */
const bodySchema = z.object({
  title: zName.max(255, 'titleMaxLength'),
  description: zNullableDescription.max(1000, 'descriptionMaxLength'),
});

export async function postHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  /**
   * @validation Security and request validation
   * @throw {UnauthorizedError}
   * @throw {ValidationError}
   */
  const operation = new CrudController([{ securable, permission: 'CREATE' }]);

  const [validated, error] = await operation.create(req, bodySchema);

  if (!validated) {
    return next(error);
  }

  /**
   * @rule {be-business-rule-001} Title is mandatory for task creation
   * @rule {be-business-rule-002} Default status is 'Pendente'
   */
  try {
    const data = await taskCreate({
      ...validated.credential,
      ...validated.params,
    });

    res
      .status(201)
      .header('Location', `/api/v1/internal/task/${data.id}`)
      .json(successResponse(data));
  } catch (error: any) {
    if (error.number === 51000) {
      res.status(400).json(errorResponse(error.message));
    } else {
      next(StatusGeneralError);
    }
  }
}
