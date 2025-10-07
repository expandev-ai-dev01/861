import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/core/components/Button';
import { Input } from '@/core/components/Input';
import type { TaskFormProps, TaskFormData } from '../../types';

/**
 * @validation Task form validation schema
 * @rule {fe-validation-patterns} Validate title and description fields
 */
const taskFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, 'O título da tarefa é obrigatório.')
    .max(255, 'O título não pode ter mais de 255 caracteres.'),
  description: z.string().max(1000, 'A descrição não pode ter mais de 1000 caracteres.').optional(),
});

/**
 * @component TaskForm
 * @summary Form component for creating new tasks
 * @domain task
 * @type form-component
 * @category task-management
 *
 * @features
 * - Title field (required, max 255 chars)
 * - Description field (optional, max 1000 chars)
 * - Form validation with Zod
 * - Loading states
 * - Error handling
 * - Cancel functionality
 */
export const TaskForm = ({ onSubmit, onCancel, isLoading = false, error }: TaskFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const handleFormSubmit = (data: TaskFormData) => {
    onSubmit({
      title: data.title,
      description: data.description || '',
    });
  };

  const handleCancel = () => {
    reset();
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      {/* Error Display */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Title Field */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
          Título *
        </label>
        <Input
          id="title"
          type="text"
          placeholder="Digite o título da tarefa"
          error={!!errors.title}
          disabled={isLoading}
          {...register('title')}
        />
        {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
      </div>

      {/* Description Field */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Descrição
        </label>
        <textarea
          id="description"
          rows={4}
          placeholder="Digite uma descrição para a tarefa (opcional)"
          disabled={isLoading}
          className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed"
          {...register('description')}
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
        )}
      </div>

      {/* Form Actions */}
      <div className="flex justify-end space-x-3 pt-4">
        <Button type="button" variant="outline" onClick={handleCancel} disabled={isLoading}>
          Cancelar
        </Button>
        <Button type="submit" loading={isLoading} disabled={!isValid || isLoading}>
          Criar Tarefa
        </Button>
      </div>
    </form>
  );
};
