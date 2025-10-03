import { dbRequest, ExpectedReturn } from '@/utils/database';
import { TaskCreateRequest, TaskCreateResponse } from './taskTypes';

/**
 * @summary
 * Creates a new task with title and optional description.
 * Automatically generates UUID, sets status to 'Pendente', and records creation date.
 *
 * @function taskCreate
 * @module task
 *
 * @param {TaskCreateRequest} params - Task creation parameters
 * @param {number} params.idAccount - Account identifier
 * @param {number} params.idUser - User identifier
 * @param {string} params.title - Task title (required, max 255 characters)
 * @param {string | null} params.description - Task description (optional, max 1000 characters)
 *
 * @returns {Promise<TaskCreateResponse>} Created task entity
 *
 * @throws {ValidationError} When parameters fail validation
 * @throws {BusinessRuleError} When business rules are violated
 * @throws {DatabaseError} When database operation fails
 *
 * @example
 * const task = await taskCreate({
 *   idAccount: 1,
 *   idUser: 1,
 *   title: 'Complete project documentation',
 *   description: 'Write comprehensive documentation for the API'
 * });
 */
export async function taskCreate(parameters: TaskCreateRequest): Promise<TaskCreateResponse> {
  /**
   * @validation Ensure title is provided and not empty
   * @throw {titleRequired}
   */
  if (!parameters.title || parameters.title.trim().length === 0) {
    throw {
      number: 51000,
      message: 'titleRequired',
    };
  }

  /**
   * @validation Validate title length
   * @throw {titleMaxLength}
   */
  if (parameters.title.length > 255) {
    throw {
      number: 51000,
      message: 'titleMaxLength',
    };
  }

  /**
   * @validation Validate description length if provided
   * @throw {descriptionMaxLength}
   */
  if (parameters.description && parameters.description.length > 1000) {
    throw {
      number: 51000,
      message: 'descriptionMaxLength',
    };
  }

  /**
   * @rule {be-business-rule-001} Title is mandatory for task creation
   * @rule {be-business-rule-002} Default status is 'Pendente'
   */
  const result = await dbRequest(
    '[functional].[spTaskCreate]',
    {
      idAccount: parameters.idAccount,
      idUser: parameters.idUser,
      title: parameters.title.trim(),
      description: parameters.description ? parameters.description.trim() : null,
    },
    ExpectedReturn.Single
  );

  return {
    id: result.id,
    title: result.title,
    description: result.description,
    status: result.status,
    creationDate: result.creationDate,
  };
}
