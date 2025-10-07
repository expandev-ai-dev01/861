import { useState } from 'react';
import { Button } from '@/core/components/Button';
import { TaskCreateModal } from '@/domain/task/components/TaskCreateModal';
import type { Task } from '@/domain/task/types';

/**
 * @page TasksPage
 * @summary Main tasks page for listing and managing tasks
 * @domain task
 * @type list-page
 * @category task-management
 *
 * @routing
 * - Path: /tasks
 * - Params: none
 * - Query: { filter?: string, sort?: string }
 * - Guards: none (for now)
 *
 * @layout
 * - Layout: RootLayout
 * - Sections: Header, Filters, Task List, Actions
 * - Navigation: Task creation, task details
 *
 * @data
 * - Sources: Task API
 * - Loading: Skeleton loading states
 * - Caching: 5 minutes stale time
 */
export const TasksPage = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleTaskCreated = (task: Task) => {
    console.log('Task created:', task);
    // TODO: Refresh task list when task listing is implemented
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tarefas</h1>
          <p className="text-gray-600 mt-1">Gerencie e organize suas tarefas de forma eficiente</p>
        </div>
        <Button onClick={() => setIsCreateModalOpen(true)}>Nova Tarefa</Button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Buscar tarefas..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
              <option value="">Todas as Prioridades</option>
              <option value="low">Baixa</option>
              <option value="medium">Média</option>
              <option value="high">Alta</option>
              <option value="urgent">Urgente</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
              <option value="">Todos os Status</option>
              <option value="Pendente">Pendente</option>
              <option value="Em Andamento">Em Andamento</option>
              <option value="Concluída">Concluída</option>
            </select>
          </div>
        </div>
      </div>

      {/* Task List Placeholder */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma tarefa ainda</h3>
            <p className="text-gray-600 mb-6">
              Crie sua primeira tarefa para começar a organizar seu trabalho.
            </p>
            <Button onClick={() => setIsCreateModalOpen(true)}>Criar Primeira Tarefa</Button>
          </div>
        </div>
      </div>

      {/* Task Create Modal */}
      <TaskCreateModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSuccess={handleTaskCreated}
      />
    </div>
  );
};

export default TasksPage;
