/**
 * @summary
 * Task business logic and CRUD operations.
 * Handles task creation with validation and data persistence.
 *
 * @module services/task/taskRules
 * @type service
 */

import { v4 as uuidv4 } from 'uuid';
import { TaskStatus } from '@/types/task';
import { CreateTaskParams, CreateTaskResult } from './taskTypes';

/**
 * @function taskCreate
 * @summary Creates a new task with default status 'Pendente'
 *
 * @param {CreateTaskParams} params - Task creation parameters
 * @returns {Promise<CreateTaskResult>} Created task entity
 *
 * @throws {Error} When required parameters are missing
 * @throws {Error} When title exceeds maximum length
 *
 * @rule {BR-001} Task can only be created if title is provided
 * @rule {BR-002} New tasks receive 'Pendente' status by default
 */
export async function taskCreate(params: CreateTaskParams): Promise<CreateTaskResult> {
  /**
   * @validation Validate required parameters
   * @throw {titleRequired}
   */
  if (!params.title || params.title.trim().length === 0) {
    throw new Error('titleRequired');
  }

  /**
   * @validation Validate title length
   * @throw {titleMaxLengthExceeded}
   */
  if (params.title.length > 255) {
    throw new Error('titleMaxLengthExceeded');
  }

  /**
   * @validation Validate description length if provided
   * @throw {descriptionMaxLengthExceeded}
   */
  if (params.description && params.description.length > 1000) {
    throw new Error('descriptionMaxLengthExceeded');
  }

  /**
   * @rule {BR-002} Set default status to 'Pendente'
   */
  const taskId = uuidv4();
  const now = new Date();

  /**
   * @remarks In production, this would persist to database
   * For now, returning the created task object
   */
  const createdTask: CreateTaskResult = {
    id: taskId,
    title: params.title.trim(),
    description: params.description ? params.description.trim() : null,
    status: TaskStatus.Pendente,
    dateCreated: now,
  };

  return createdTask;
}
