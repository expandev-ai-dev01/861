/**
 * @summary
 * Unit tests for task service business logic.
 * Tests task creation validation and entity generation.
 *
 * @module services/task/taskService.test
 * @type test
 */

import { taskCreate } from './taskService';
import { TaskCreateParams } from './taskTypes';

describe('Task Service - taskCreate', () => {
  it('should create task with valid title', async () => {
    const params: TaskCreateParams = {
      title: 'Test Task',
    };

    const result = await taskCreate(params);

    expect(result).toHaveProperty('taskId');
    expect(result.title).toBe('Test Task');
    expect(result.description).toBeNull();
    expect(result.status).toBe('Pendente');
    expect(result.creationDate).toBeInstanceOf(Date);
  });

  it('should create task with title and description', async () => {
    const params: TaskCreateParams = {
      title: 'Test Task',
      description: 'Test Description',
    };

    const result = await taskCreate(params);

    expect(result.title).toBe('Test Task');
    expect(result.description).toBe('Test Description');
  });

  it('should throw error for empty title', async () => {
    const params: TaskCreateParams = {
      title: '',
    };

    await expect(taskCreate(params)).rejects.toThrow('titleRequired');
  });

  it('should throw error for whitespace-only title', async () => {
    const params: TaskCreateParams = {
      title: '   ',
    };

    await expect(taskCreate(params)).rejects.toThrow('titleRequired');
  });

  it('should throw error for title exceeding 255 characters', async () => {
    const params: TaskCreateParams = {
      title: 'a'.repeat(256),
    };

    await expect(taskCreate(params)).rejects.toThrow('titleMaxLength');
  });

  it('should throw error for description exceeding 1000 characters', async () => {
    const params: TaskCreateParams = {
      title: 'Test Task',
      description: 'a'.repeat(1001),
    };

    await expect(taskCreate(params)).rejects.toThrow('descriptionMaxLength');
  });

  it('should generate unique task IDs', async () => {
    const params: TaskCreateParams = {
      title: 'Test Task',
    };

    const task1 = await taskCreate(params);
    const task2 = await taskCreate(params);

    expect(task1.taskId).not.toBe(task2.taskId);
  });

  it('should set status to Pendente by default', async () => {
    const params: TaskCreateParams = {
      title: 'Test Task',
    };

    const result = await taskCreate(params);

    expect(result.status).toBe('Pendente');
  });
});
