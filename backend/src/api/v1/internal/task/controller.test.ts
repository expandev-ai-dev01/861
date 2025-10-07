/**
 * @summary
 * Unit tests for task creation controller.
 * Tests validation, sanitization, and error handling.
 *
 * @module api/v1/internal/task/controller.test
 * @type test
 */

import { Request, Response, NextFunction } from 'express';
import { postHandler } from './controller';
import * as taskService from '@/services/task/taskService';

jest.mock('@/services/task/taskService');

describe('Task Controller - postHandler', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockRequest = {
      body: {},
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    mockNext = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create task with valid title only', async () => {
    mockRequest.body = {
      title: 'Test Task',
    };

    const mockTask = {
      taskId: 'test-uuid',
      title: 'Test Task',
      description: null,
      status: 'Pendente',
      creationDate: new Date(),
    };

    (taskService.taskCreate as jest.Mock).mockResolvedValue(mockTask);

    await postHandler(mockRequest as Request, mockResponse as Response, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.json).toHaveBeenCalled();
  });

  it('should create task with title and description', async () => {
    mockRequest.body = {
      title: 'Test Task',
      description: 'Test Description',
    };

    const mockTask = {
      taskId: 'test-uuid',
      title: 'Test Task',
      description: 'Test Description',
      status: 'Pendente',
      creationDate: new Date(),
    };

    (taskService.taskCreate as jest.Mock).mockResolvedValue(mockTask);

    await postHandler(mockRequest as Request, mockResponse as Response, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(201);
  });

  it('should reject empty title', async () => {
    mockRequest.body = {
      title: '',
    };

    await postHandler(mockRequest as Request, mockResponse as Response, mockNext);

    expect(mockNext).toHaveBeenCalled();
  });

  it('should reject title exceeding 255 characters', async () => {
    mockRequest.body = {
      title: 'a'.repeat(256),
    };

    await postHandler(mockRequest as Request, mockResponse as Response, mockNext);

    expect(mockNext).toHaveBeenCalled();
  });

  it('should reject description exceeding 1000 characters', async () => {
    mockRequest.body = {
      title: 'Test Task',
      description: 'a'.repeat(1001),
    };

    await postHandler(mockRequest as Request, mockResponse as Response, mockNext);

    expect(mockNext).toHaveBeenCalled();
  });

  it('should sanitize XSS attempts in title', async () => {
    mockRequest.body = {
      title: '<script>alert("xss")</script>Test',
    };

    const mockTask = {
      taskId: 'test-uuid',
      title: 'Test',
      description: null,
      status: 'Pendente',
      creationDate: new Date(),
    };

    (taskService.taskCreate as jest.Mock).mockResolvedValue(mockTask);

    await postHandler(mockRequest as Request, mockResponse as Response, mockNext);

    expect(taskService.taskCreate).toHaveBeenCalledWith(
      expect.objectContaining({
        title: expect.not.stringContaining('<script>'),
      })
    );
  });
});
