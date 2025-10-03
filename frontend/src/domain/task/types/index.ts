/**
 * @types Task Domain Types
 * @summary Type definitions for task management domain
 * @domain task
 * @category types
 */

export interface Task {
  id: string;
  title: string;
  description: string | null;
  status: TaskStatus;
  creationDate: string;
}

export enum TaskStatus {
  Pendente = 'Pendente',
  EmAndamento = 'Em Andamento',
  Concluida = 'Concluída',
}

export interface CreateTaskDto {
  title: string;
  description?: string;
}

export interface TaskFormData {
  title: string;
  description: string;
}

export interface TaskApiResponse {
  data: Task;
  message?: string;
  success: boolean;
}
