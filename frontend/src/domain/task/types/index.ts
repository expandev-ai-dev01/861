/**
 * @module task/types
 * @summary Type definitions for task domain
 * @domain task
 * @category types
 */

/**
 * @enum TaskStatus
 * @summary Task status enumeration
 */
export enum TaskStatus {
  Pendente = 0,
  EmAndamento = 1,
  Concluida = 2,
}

/**
 * @interface Task
 * @summary Complete task entity
 */
export interface Task {
  id: string;
  title: string;
  description: string | null;
  status: TaskStatus;
  dateCreated: string;
}

/**
 * @interface CreateTaskDto
 * @summary Data transfer object for task creation
 */
export interface CreateTaskDto {
  title: string;
  description: string | null;
}

/**
 * @interface TaskFormData
 * @summary Form data structure for task creation
 */
export interface TaskFormData {
  title: string;
  description?: string;
}

/**
 * @interface TaskApiResponse
 * @summary API response structure for task operations
 */
export interface TaskApiResponse {
  data: Task;
  success: boolean;
  message?: string;
}
