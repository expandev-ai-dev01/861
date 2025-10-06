/**
 * @component TaskForm
 * @summary Form component for creating new tasks with validation
 * @domain task
 * @type domain-component
 * @category form
 *
 * @description
 * Implements the task creation form with:
 * - Title field (required, max 255 characters)
 * - Description field (optional, max 1000 characters)
 * - Client-side validation using Zod
 * - Loading states during submission
 * - Error handling and display
 * - Success callback on task creation
 *
 * @props
 * @param {Function} onSuccess - Callback when task is created successfully
 * @param {Function} onCancel - Callback when form is cancelled
 *
 * @state
 * - Form data managed by react-hook-form
 * - Validation errors from Zod schema
 * - Loading state during API call
 * - API error messages
 *
 * @validation
 * - Title: Required, max 255 characters
 * - Description: Optional, max 1000 characters
 *
 * @accessibility
 * - ARIA labels on form fields
 * - Error messages associated with fields
 * - Keyboard navigation support
 * - Focus management
 *
 * @examples
 * ```tsx
 * <TaskForm
 *   onSuccess={(task) => {
 *     console.log('Task created:', task);
 *     navigate('/tasks');
 *   }}
 *   onCancel={() => navigate('/tasks')}
 * />
 * ```
 */

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/core/components/Input';
import { Button } from '@/core/components/Button';
import { useTaskCreate } from '../../hooks/useTaskCreate';
import type { TaskFormProps } from './types';
import type { TaskFormData } from '../../types';

/**
 * @validation Task form validation schema
 * @rule {VA-001} Title is required
 * @rule {VA-002} Title max 255 characters
 * @rule Description max 1000 characters
 */
const taskFormSchema = z.object({
  title: z
    .string()
    .min(1, 'O título da tarefa é obrigatório.')
    .max(255, 'O título não pode ter mais de 255 caracteres.'),
  description: z
    .string()
    .max(1000, 'A descrição não pode ter mais de 1000 caracteres.')
    .optional()
    .or(z.literal('')),
}) satisfies z.ZodType<TaskFormData>;

export const TaskForm = ({ onSuccess, onCancel }: TaskFormProps) => {
  // #region Form Setup
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
  // #endregion

  // #region Task Creation Hook
  const {
    createTask,
    isCreating,
    error: apiError,
  } = useTaskCreate({
    onSuccess: (task) => {
      reset();
      onSuccess?.(task);
    },
  });
  // #endregion

  // #region Form Submission Handler
  /**
   * @handler onSubmit
   * @rule {BR-001} Task can only be created if title is filled
   * @rule {BR-002} New task receives 'Pendente' status by default
   * @rule {SE-001} Input sanitization handled by backend
   */
  const onSubmit = async (data: TaskFormData) => {
    try {
      await createTask({
        title: data.title,
        description: data.description || null,
      });
    } catch (error) {
      // Error handled by hook
    }
  };
  // #endregion

  // #region Cancel Handler
  const handleCancel = () => {
    reset();
    onCancel?.();
  };
  // #endregion

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* API Error Display */}
      {apiError && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
          <p className="text-sm font-medium">Erro ao criar tarefa</p>
          <p className="text-sm mt-1">{apiError.message}</p>
        </div>
      )}

      {/* Title Field */}
      <Input
        label="Título"
        placeholder="Digite o título da tarefa"
        error={errors.title?.message}
        required
        disabled={isCreating}
        {...register('title')}
      />

      {/* Description Field */}
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
        <textarea
          placeholder="Digite a descrição da tarefa (opcional)"
          rows={4}
          disabled={isCreating}
          className={
            'w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors ' +
            (errors.description
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500') +
            (isCreating ? ' bg-gray-50 cursor-not-allowed' : '')
          }
          {...register('description')}
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
        )}
      </div>

      {/* Form Actions */}
      <div className="flex justify-end gap-3">
        {onCancel && (
          <Button type="button" variant="outline" onClick={handleCancel} disabled={isCreating}>
            Cancelar
          </Button>
        )}
        <Button type="submit" loading={isCreating} disabled={isCreating}>
          {isCreating ? 'Salvando...' : 'Salvar'}
        </Button>
      </div>
    </form>
  );
};
