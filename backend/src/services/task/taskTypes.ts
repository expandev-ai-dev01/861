/**
 * @interface TaskEntity
 * @description Represents a task entity in the system
 *
 * @property {string} id - Unique task identifier (UUID)
 * @property {number} idAccount - Associated account identifier
 * @property {string} title - Task title
 * @property {string | null} description - Task description (optional)
 * @property {string} status - Current task status
 * @property {Date} creationDate - Creation timestamp
 * @property {boolean} deleted - Soft delete flag
 */
export interface TaskEntity {
  id: string;
  idAccount: number;
  title: string;
  description: string | null;
  status: string;
  creationDate: Date;
  deleted: boolean;
}

/**
 * @interface TaskCreateRequest
 * @description Request parameters for task creation
 *
 * @property {number} idAccount - Account identifier
 * @property {number} idUser - User identifier
 * @property {string} title - Task title (required)
 * @property {string | null} description - Task description (optional)
 */
export interface TaskCreateRequest {
  idAccount: number;
  idUser: number;
  title: string;
  description: string | null;
}

/**
 * @interface TaskCreateResponse
 * @description Response data for task creation
 *
 * @property {string} id - Created task identifier
 * @property {string} title - Task title
 * @property {string | null} description - Task description
 * @property {string} status - Task status
 * @property {Date} creationDate - Creation timestamp
 */
export interface TaskCreateResponse {
  id: string;
  title: string;
  description: string | null;
  status: string;
  creationDate: Date;
}
