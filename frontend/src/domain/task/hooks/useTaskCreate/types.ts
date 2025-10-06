/**
 * @module task/hooks/useTaskCreate/types
 * @summary Type definitions for useTaskCreate hook
 */

import type { CreateTaskDto, Task } from '../../types';

/**
 * @interface UseTaskCreateOptions
 * @summary Configuration options for useTaskCreate hook
 */
export interface UseTaskCreateOptions {
  onSuccess?: (task: Task) => void;
  onError?: (error: Error) => void;
}

/**
 * @interface UseTaskCreateReturn
 * @summary Return type for useTaskCreate hook
 */
export interface UseTaskCreateReturn {
  createTask: (data: CreateTaskDto) => Promise<Task>;
  isCreating: boolean;
  error: Error | null;
  reset: () => void;
}
