import { useState } from 'react';
import { useTaskCreate } from '../../hooks/useTaskCreate';
import { TaskForm } from '../TaskForm';
import type { TaskCreateModalProps, TaskFormData } from '../../types';

/**
 * @component TaskCreateModal
 * @summary Modal component for creating new tasks
 * @domain task
 * @type modal-component
 * @category task-management
 *
 * @features
 * - Modal overlay with backdrop
 * - Task creation form
 * - Success/error handling
 * - Keyboard navigation (ESC to close)
 * - Focus management
 */
export const TaskCreateModal = ({ isOpen, onClose, onSuccess }: TaskCreateModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { createTask, isCreating, error } = useTaskCreate({
    onSuccess: (task) => {
      onSuccess?.(task);
      onClose();
    },
  });

  const handleSubmit = async (data: TaskFormData) => {
    setIsSubmitting(true);
    try {
      await createTask({
        title: data.title,
        description: data.description || null,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="flex min-h-screen items-center justify-center p-4">
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />

        {/* Modal */}
        <div
          className="relative bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 id="modal-title" className="text-lg font-semibold text-gray-900">
              Nova Tarefa
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Fechar modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <TaskForm
              onSubmit={handleSubmit}
              onCancel={onClose}
              isLoading={isCreating || isSubmitting}
              error={error}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
