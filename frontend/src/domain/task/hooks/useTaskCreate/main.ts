import { useMutation, useQueryClient } from '@tanstack/react-query';
import { taskService } from '../../services/taskService';
import type { UseTaskCreateOptions, UseTaskCreateReturn, CreateTaskDto } from '../../types';

/**
 * @hook useTaskCreate
 * @summary Hook for creating new tasks with optimistic updates
 * @domain task
 * @type domain-hook
 * @category data
 *
 * @features
 * - Creates new tasks via API
 * - Handles loading and error states
 * - Invalidates task queries on success
 * - Provides success/error callbacks
 */
export const useTaskCreate = (options: UseTaskCreateOptions = {}): UseTaskCreateReturn => {
  const { onSuccess, onError } = options;
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: CreateTaskDto) => taskService.create(data),
    onSuccess: (task) => {
      // Invalidate and refetch task queries
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      onSuccess?.(task);
    },
    onError: (error) => {
      onError?.(error);
    },
  });

  return {
    createTask: mutation.mutateAsync,
    isCreating: mutation.isPending,
    error: mutation.error?.message || null,
  };
};
