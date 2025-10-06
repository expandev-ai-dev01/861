/**
 * @summary
 * Task entity type definitions and enums.
 * Defines the structure of task objects and related types.
 *
 * @module types/task
 * @type type-definitions
 */

export interface TaskEntity {
  id: string;
  idAccount: number;
  idUser: number;
  title: string;
  description: string | null;
  status: TaskStatus;
  dateCreated: Date;
  dateModified: Date;
  deleted: boolean;
}

export enum TaskStatus {
  Pendente = 0,
  EmAndamento = 1,
  Concluida = 2,
}

export interface TaskCreateRequest {
  idAccount: number;
  idUser: number;
  title: string;
  description?: string | null;
}

export interface TaskCreateResponse {
  id: string;
  title: string;
  description: string | null;
  status: TaskStatus;
  dateCreated: Date;
}
