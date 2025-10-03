import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTaskCreate } from '../../hooks/useTaskCreate';
import { Button } from '@/core/components/Button';
import { Card } from '@/core/components/Card';
import type { TaskFormProps } from './types';
import type { TaskFormData } from '../../types';

/**
 * @validation Task form validation schema
 * @rule {VA-001} Title is required and cannot be empty
 * @rule {VA-002} Title maximum length is 255 characters
 * @rule {RU-005} Description maximum length is 1000 characters
 */
const taskFormSchema = z.object({
  title: z
    .string()
    .min(1, 'O título da tarefa é obrigatório.')
    .max(255, 'O título não pode ter mais de 255 caracteres.')
    .trim(),
  description: z
    .string()
    .max(1000, 'A descrição não pode ter mais de 1000 caracteres.')
    .optional()
    .default(''),
});

/**
 * @component TaskForm
 * @summary Form component for creating new tasks with validation
 * @domain task
 * @type domain-component
 * @category form
 *
 * @dependencies
 * - react-hook-form: Form state management
 * - zod: Schema validation
 * - useTaskCreate: Task creation hook
 *
 * @props
 * @param {Function} props.onSuccess - Callback when task is created successfully
 * @param {Function} props.onCancel - Callback when form is cancelled
 * @param {string} props.className - Additional CSS classes
 *
 * @state
 * - Form state managed by react-hook-form
 * - Validation errors displayed inline
 * - Loading state during submission
 *
 * @accessibility
 * - ARIA: Form fields have proper labels and error messages
 * - Keyboard: Full keyboard navigation support
 * - Screen Reader: Error messages announced to screen readers
 *
 * @examples
 * ```tsx
 * <TaskForm
 *   onSuccess={(task) => navigate('/tasks')}
 *   onCancel={() => navigate('/tasks')}
 * />
 * ```
 *
 * @testScenarios
 * - Should validate required title field
 * - Should validate title max length (255 chars)
 * - Should validate description max length (1000 chars)
 * - Should submit valid form data
 * - Should display error messages on validation failure
 * - Should show loading state during submission
 * - Should call onSuccess callback after successful creation
 * - Should call onCancel callback when cancel button clicked
 */
export const TaskForm = ({ onSuccess, onCancel, className }: TaskFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const { createTask, isCreating } = useTaskCreate({
    onSuccess: (task) => {
      reset();
      onSuccess?.(task);
    },
    onError: (error) => {
      console.error('Failed to create task:', error);
    },
  });

  const onSubmit = async (data: TaskFormData) => {
    try {
      await createTask({
        title: data.title,
        description: data.description || undefined,
      });
    } catch (error) {
      // Error is handled by useTaskCreate hook
    }
  };

  return (
    <Card className={className}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Título <span className="text-red-500">*</span>
            </label>
            <input
              id="title"
              type="text"
              {...register('title')}
              className={
                'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ' +
                (errors.title ? 'border-red-500' : 'border-gray-300')
              }
              placeholder="Digite o título da tarefa"
              disabled={isCreating}
              aria-invalid={errors.title ? 'true' : 'false'}
              aria-describedby={errors.title ? 'title-error' : undefined}
            />
            {errors.title && (
              <p id="title-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Descrição
            </label>
            <textarea
              id="description"
              {...register('description')}
              rows={4}
              className={
                'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none ' +
                (errors.description ? 'border-red-500' : 'border-gray-300')
              }
              placeholder="Digite uma descrição para a tarefa (opcional)"
              disabled={isCreating}
              aria-invalid={errors.description ? 'true' : 'false'}
              aria-describedby={errors.description ? 'description-error' : undefined}
            />
            {errors.description && (
              <p id="description-error" className="mt-1 text-sm text-red-600" role="alert">
                {errors.description.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          {onCancel && (
            <Button type="button" variant="outline" onClick={onCancel} disabled={isCreating}>
              Cancelar
            </Button>
          )}
          <Button type="submit" variant="primary" isLoading={isCreating} disabled={isCreating}>
            {isCreating ? 'Salvando...' : 'Salvar'}
          </Button>
        </div>
      </form>
    </Card>
  );
};
