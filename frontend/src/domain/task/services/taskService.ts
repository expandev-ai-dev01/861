/**
 * @service taskService
 * @summary Task management service for authenticated endpoints
 * @domain task
 * @type rest-service
 * @apiContext internal
 *
 * @description
 * All methods in this service use authenticatedClient which targets:
 * /api/v1/internal/task
 *
 * Authentication token is automatically added by interceptor.
 */

import { authenticatedClient } from '@/core/lib/api';
import type { Task, CreateTaskDto, TaskApiResponse } from '../types';

export const taskService = {
  /**
   * @endpoint POST /api/v1/internal/task
   * @summary Creates new task
   * @param {CreateTaskDto} data - Task creation data
   * @returns {Promise<Task>} Created task
   * @throws {Error} Validation or server errors
   */
  async create(data: CreateTaskDto): Promise<Task> {
    const response = await authenticatedClient.post<TaskApiResponse>('/task', data);
    return response.data.data;
  },
};
