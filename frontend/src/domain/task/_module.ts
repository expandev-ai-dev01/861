/**
 * @module task
 * @summary Task management domain with components, hooks, and services
 * for creating and managing tasks in the TODO list application.
 * @domain functional
 * @dependencies ['@/core/components', '@/core/lib/api', '@tanstack/react-query']
 * @version 1.0.0
 * @author Development Team
 * @lastModified 2025-01-15
 */

// Domain public exports - Components
export * from './components/TaskForm';

// Domain public exports - Hooks
export * from './hooks/useTaskCreate';

// Domain public exports - Services
export * from './services/taskService';

// Domain public exports - Types
export * from './types';

// Module metadata
export const moduleMetadata = {
  name: 'task',
  domain: 'functional',
  version: '1.0.0',
  publicComponents: ['TaskForm'],
  publicHooks: ['useTaskCreate'],
  publicServices: ['taskService'],
  dependencies: {
    internal: ['@/core/components', '@/core/lib/api', '@/core/utils'],
    external: ['react', 'react-hook-form', 'zod', '@tanstack/react-query'],
    domains: [],
  },
  exports: {
    components: ['TaskForm'],
    hooks: ['useTaskCreate'],
    services: ['taskService'],
    types: ['Task', 'CreateTaskDto', 'TaskStatus'],
  },
} as const;
