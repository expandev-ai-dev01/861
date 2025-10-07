/**
 * @module task
 * @summary Task management domain with creation, listing, and management capabilities
 * @domain functional
 * @dependencies List of key module dependencies
 * @version 1.0.0
 * @author Development Team
 * @lastModified 2024-01-15
 */

// Domain public exports - Components
export * from './components/TaskForm';
export * from './components/TaskCreateModal';

// Domain public exports - Hooks
export * from './hooks/useTaskCreate';

// Domain public exports - Services
export * from './services/taskService';

// Domain public exports - Types
export * from './types';

// Module metadata (for analysis and documentation tools)
export const moduleMetadata = {
  name: 'task',
  domain: 'functional',
  version: '1.0.0',
  publicComponents: ['TaskForm', 'TaskCreateModal'],
  publicHooks: ['useTaskCreate'],
  publicServices: ['taskService'],
  publicStores: [],
  dependencies: {
    internal: ['@/core/components', '@/core/lib/api'],
    external: ['react', 'react-hook-form', '@tanstack/react-query', 'zod'],
    domains: [],
  },
  exports: {
    components: ['TaskForm', 'TaskCreateModal'],
    hooks: ['useTaskCreate'],
    services: ['taskService'],
    stores: [],
    types: ['Task', 'CreateTaskDto', 'TaskFormData', 'TaskFormProps', 'TaskCreateModalProps'],
    utils: [],
  },
} as const;
