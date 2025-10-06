/**
 * @hook useTaskCreate
 * @summary Manages task creation with mutation handling and error management
 * @domain task
 * @type domain-hook
 * @category data
 *
 * @description
 * Provides task creation functionality using TanStack Query mutation.
 * Handles loading states, error handling, and success callbacks.
 *
 * @dependencies
 * - @tanstack/react-query: For mutation management
 * - taskService: For API communication
 *
 * @sideEffects
 * - Calls backend API to create task
 * - Triggers success/error callbacks
 * - Manages loading and error states
 *
 * @examples
 * ```tsx
 * const { createTask, isCreating, error } = useTaskCreate({
 *   onSuccess: (task) => {
 *     console.log('Task created:', task);
 *     navigate('/tasks');
 *   },
 *   onError: (error) => {
 *     console.error('Failed to create task:', error);
 *   }
 * });
 *
 * await createTask({
 *   title: 'New Task',
 *   description: 'Task description'
 * });
 * ```
 */

import { useMutation } from '@tanstack/react-query';
import { taskService } from '../../services/taskService';
import type { UseTaskCreateOptions, UseTaskCreateReturn } from './types';

export const useTaskCreate = (options: UseTaskCreateOptions = {}): UseTaskCreateReturn => {
  const { onSuccess, onError } = options;

  const mutation = useMutation({
    mutationFn: taskService.create,
    onSuccess: (data) => {
      onSuccess?.(data);
    },
    onError: (error: Error) => {
      onError?.(error);
    },
  });

  return {
    createTask: mutation.mutateAsync,
    isCreating: mutation.isPending,
    error: mutation.error,
    reset: mutation.reset,
  };
};
