/**
 * @summary
 * Task service type definitions.
 * Defines interfaces and types for task operations.
 *
 * @module services/task/taskTypes
 * @type type-definitions
 */

/**
 * @interface TaskCreateParams
 * @description Parameters required for creating a new task
 *
 * @property {string} title - Task title (required, max 255 characters)
 * @property {string | null} [description] - Task description (optional, max 1000 characters)
 */
export interface TaskCreateParams {
  title: string;
  description?: string | null;
}

/**
 * @interface TaskEntity
 * @description Represents a task entity in the system
 *
 * @property {string} taskId - Unique task identifier (UUID)
 * @property {string} title - Task title
 * @property {string | null} description - Task description (optional)
 * @property {TaskStatus} status - Current task status
 * @property {Date} creationDate - Task creation timestamp
 */
export interface TaskEntity {
  taskId: string;
  title: string;
  description: string | null;
  status: TaskStatus;
  creationDate: Date;
}

/**
 * @type TaskStatus
 * @description Possible task status values
 */
export type TaskStatus = 'Pendente' | 'Em Andamento' | 'Concluída';
