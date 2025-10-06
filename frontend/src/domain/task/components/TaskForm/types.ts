/**
 * @module task/components/TaskForm/types
 * @summary Type definitions for TaskForm component
 */

import type { Task } from '../../types';

/**
 * @interface TaskFormProps
 * @summary Props for TaskForm component
 */
export interface TaskFormProps {
  onSuccess?: (task: Task) => void;
  onCancel?: () => void;
}
