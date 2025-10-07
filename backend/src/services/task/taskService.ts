/**
 * @summary
 * Task business logic service.
 * Handles task creation and management operations.
 *
 * @module services/task/taskService
 * @type service
 *
 * @businessLogic
 * - Task creation with default status 'Pendente'
 * - UUID generation for task identifiers
 * - Timestamp management for creation dates
 */

import { v4 as uuidv4 } from 'uuid';
import { TaskCreateParams, TaskEntity } from './taskTypes';

/**
 * @function taskCreate
 * @summary Creates a new task with validated parameters
 *
 * @param {TaskCreateParams} params - Task creation parameters
 * @param {string} params.title - Task title (required)
 * @param {string | null} params.description - Task description (optional)
 *
 * @returns {Promise<TaskEntity>} Created task entity
 *
 * @rule {be-business-rule-validation} Validate title is provided
 * @rule {be-service-function-patterns} CRUD operation pattern
 *
 * @throws {Error} When title is empty or invalid
 *
 * @example
 * const task = await taskCreate({
 *   title: 'Complete project documentation',
 *   description: 'Write comprehensive API documentation'
 * });
 */
export async function taskCreate(params: TaskCreateParams): Promise<TaskEntity> {
  /**
   * @validation Ensure title is provided
   * @throw {Error}
   */
  if (!params.title || params.title.trim().length === 0) {
    throw new Error('titleRequired');
  }

  /**
   * @validation Ensure title length is within limits
   * @throw {Error}
   */
  if (params.title.length > 255) {
    throw new Error('titleMaxLength');
  }

  /**
   * @validation Ensure description length is within limits if provided
   * @throw {Error}
   */
  if (params.description && params.description.length > 1000) {
    throw new Error('descriptionMaxLength');
  }

  /**
   * @rule {be-service-layer-architecture} Generate system-defined values
   */
  const taskId = uuidv4();
  const creationDate = new Date();
  const status = 'Pendente';

  /**
   * @remarks In a real implementation, this would persist to database
   * For now, returning the constructed entity
   */
  const task: TaskEntity = {
    taskId,
    title: params.title,
    description: params.description || null,
    status,
    creationDate,
  };

  return task;
}
