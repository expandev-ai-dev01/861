import { useMutation, useQueryClient } from '@tanstack/react-query';
import { taskService } from '../../services/taskService';
import { QUERY_KEYS } from '@/core/constants';
import type { UseTaskCreateOptions, UseTaskCreateReturn } from './types';
import type { Task, CreateTaskDto } from '../../types';

/**
 * @hook useTaskCreate
 * @summary Hook for creating new tasks with optimistic updates and cache invalidation
 * @domain task
 * @type domain-hook
 * @category data
 *
 * @dependencies
 * - taskService: Task API service
 * - TanStack Query: For mutation and cache management
 *
 * @parameters
 * @param {UseTaskCreateOptions} options - Hook configuration options
 * @param {Function} options.onSuccess - Callback on successful creation
 * @param {Function} options.onError - Callback on error
 *
 * @returns {UseTaskCreateReturn} Hook return object
 * @returns {Function} returns.createTask - Function to create a new task
 * @returns {boolean} returns.isCreating - Loading state during creation
 * @returns {Error|null} returns.error - Error object if creation fails
 * @returns {Function} returns.reset - Function to reset mutation state
 *
 * @sideEffects
 * - Invalidates task list cache on success
 * - Calls onSuccess callback with created task
 * - Calls onError callback on failure
 *
 * @examples
 * ```tsx
 * const { createTask, isCreating } = useTaskCreate({
 *   onSuccess: (task) => navigate('/tasks'),
 *   onError: (error) => console.error(error)
 * });
 *
 * await createTask({
 *   title: 'New Task',
 *   description: 'Task description'
 * });
 * ```
 */
export const useTaskCreate = (options: UseTaskCreateOptions = {}): UseTaskCreateReturn => {
  const { onSuccess, onError } = options;
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: CreateTaskDto) => taskService.create(data),
    onSuccess: (task: Task) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.TASKS] });
      onSuccess?.(task);
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
