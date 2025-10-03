/**
 * @constants Core Constants
 * @summary Application-wide constant values
 * @category constants
 */

export const API_ENDPOINTS = {
  TASKS: '/task',
} as const;

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_PREFERENCES: 'user_preferences',
} as const;

export const QUERY_KEYS = {
  TASKS: 'tasks',
  TASK_DETAIL: 'task-detail',
} as const;

export const ROUTES = {
  HOME: '/',
  NOT_FOUND: '*',
} as const;
