import { authenticatedClient } from '@/core/lib/api';
import { API_ENDPOINTS } from '@/core/constants';
import type { Task, CreateTaskDto, TaskApiResponse } from '../types';

/**
 * @service taskService
 * @summary Task management service for authenticated endpoints
 * @domain task
 * @type rest-service
 * @apiContext internal
 *
 * @description
 * All methods in this service use authenticatedClient which targets:
 * /api/v1/internal/task/...
 *
 * Authentication token is automatically added by interceptor.
 */
export const taskService = {
  /**
   * @endpoint POST /api/v1/internal/task
   * @summary Creates new task with title and optional description
   * @param {CreateTaskDto} data - Task creation data
   * @returns {Promise<Task>} The newly created task
   * @throws {ValidationError} When title is empty or exceeds 255 characters
   * @throws {ValidationError} When description exceeds 1000 characters
   */
  async create(data: CreateTaskDto): Promise<Task> {
    const response = await authenticatedClient.post<TaskApiResponse>(API_ENDPOINTS.TASKS, data);
    return response.data.data;
  },
};
