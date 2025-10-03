import { useNavigate } from 'react-router-dom';
import { TaskForm } from '@/domain/task/components/TaskForm';
import type { Task } from '@/domain/task/types';

/**
 * @page TaskCreatePage
 * @summary Page for creating new tasks with form validation
 * @domain task
 * @type form-page
 * @category task-management
 *
 * @routing
 * - Path: /tasks/create
 * - Params: none
 * - Query: none
 * - Guards: none (can be added later for authentication)
 *
 * @layout
 * - Layout: RootLayout
 * - Sections: Header, Form, Actions
 * - Navigation: Back to tasks list on success/cancel
 *
 * @data
 * - Sources: Task API via TaskForm component
 * - Loading: Handled by TaskForm component
 * - Caching: Task list cache invalidated on success
 *
 * @userFlows
 * - Primary: User fills form and creates task
 * - Secondary: User cancels and returns to tasks list
 * - Error: Validation errors displayed inline in form
 *
 * @examples
 * ```tsx
 * // Page usage in router
 * <Route path="/tasks/create" element={<TaskCreatePage />} />
 * ```
 */
export const TaskCreatePage = () => {
  const navigate = useNavigate();

  const handleSuccess = (task: Task) => {
    // Navigate to tasks list after successful creation
    navigate('/');
  };

  const handleCancel = () => {
    // Navigate back to tasks list
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Nova Tarefa</h1>
        <p className="text-gray-600">
          Preencha os campos abaixo para criar uma nova tarefa. O título é obrigatório.
        </p>
      </div>

      <TaskForm onSuccess={handleSuccess} onCancel={handleCancel} />
    </div>
  );
};

export default TaskCreatePage;
