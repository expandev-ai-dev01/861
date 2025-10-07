/**
 * @types Task Domain Types
 * @summary Type definitions for task domain
 * @domain task
 * @type type-definitions
 * @category task-management
 */

export type TaskStatus = 'Pendente' | 'Em Andamento' | 'Concluída';

export type Task = {
  taskId: string;
  title: string;
  description: string | null;
  status: TaskStatus;
  creationDate: string;
};

export type CreateTaskDto = {
  title: string;
  description?: string | null;
};

export type TaskFormData = {
  title: string;
  description: string;
};

export type UseTaskCreateOptions = {
  onSuccess?: (task: Task) => void;
  onError?: (error: any) => void;
};

export type UseTaskCreateReturn = {
  createTask: (data: CreateTaskDto) => Promise<Task>;
  isCreating: boolean;
  error: string | null;
};

export type TaskFormProps = {
  onSubmit: (data: TaskFormData) => void;
  onCancel: () => void;
  isLoading?: boolean;
  error?: string | null;
};

export type TaskCreateModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (task: Task) => void;
};
