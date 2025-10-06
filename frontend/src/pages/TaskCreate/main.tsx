/**
 * @page TaskCreatePage
 * @summary Page for creating new tasks
 * @domain task
 * @type form-page
 * @category task-management
 *
 * @routing
 * - Path: /tasks/create
 * - Params: none
 * - Query: none
 * - Guards: Authentication required (to be implemented)
 *
 * @layout
 * - Layout: MainLayout
 * - Sections: Header, Form
 * - Navigation: Back to tasks list
 *
 * @data
 * - Sources: Task creation API
 * - Loading: Form submission loading state
 * - Caching: No caching for creation
 *
 * @userFlows
 * - Primary: User fills form and creates task
 * - Secondary: User cancels and returns to list
 * - Error: Validation errors or API errors displayed
 *
 * @examples
 * ```tsx
 * // Usage in router
 * <Route path="/tasks/create" element={<TaskCreatePage />} />
 * ```
 */

import { useNavigate } from 'react-router-dom';
import { TaskForm } from '@/domain/task/components/TaskForm';

export const TaskCreatePage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <button
          onClick={() => navigate('/')}
          className="text-primary-600 hover:text-primary-700 text-sm font-medium mb-4 inline-flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Voltar
        </button>
        <h1 className="text-3xl font-bold text-gray-900">Nova Tarefa</h1>
        <p className="text-gray-600 mt-2">Preencha os campos abaixo para criar uma nova tarefa</p>
      </div>

      {/* Task Form */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <TaskForm
          onSuccess={(task) => {
            navigate('/', {
              state: {
                message: 'Tarefa criada com sucesso!',
                taskId: task.id,
              },
            });
          }}
          onCancel={() => navigate('/')}
        />
      </div>
    </div>
  );
};

export default TaskCreatePage;
