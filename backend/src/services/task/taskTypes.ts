/**
 * @summary
 * Task service type definitions.
 * Defines interfaces for task service operations.
 *
 * @module services/task/taskTypes
 * @type type-definitions
 */

import { TaskStatus } from '@/types/task';

export interface CreateTaskParams {
  idAccount: number;
  idUser: number;
  title: string;
  description: string | null;
}

export interface CreateTaskResult {
  id: string;
  title: string;
  description: string | null;
  status: TaskStatus;
  dateCreated: Date;
}
