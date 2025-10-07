/**
 * @summary
 * Error handling middleware for Express application.
 * Provides standardized error responses and logging.
 *
 * @module middleware/errorMiddleware
 * @type middleware
 *
 * @errorHandling
 * - Validation errors: 400 Bad Request
 * - Authentication errors: 401 Unauthorized
 * - Authorization errors: 403 Forbidden
 * - Not found errors: 404 Not Found
 * - Server errors: 500 Internal Server Error
 */

import { Request, Response, NextFunction } from 'express';

export interface AppError extends Error {
  status?: number;
  code?: string;
  details?: any;
}

export const errorMiddleware = (
  error: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const status = error.status || 500;
  const code = error.code || 'INTERNAL_SERVER_ERROR';
  const message = error.message || 'An unexpected error occurred';

  console.error('Error:', {
    code,
    message,
    status,
    path: _req.path,
    method: _req.method,
    timestamp: new Date().toISOString(),
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
  });

  res.status(status).json({
    success: false,
    error: {
      code,
      message,
      ...(error.details && { details: error.details }),
      ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
    },
    timestamp: new Date().toISOString(),
  });
};

export const createError = (
  message: string,
  status: number = 500,
  code?: string,
  details?: any
): AppError => {
  const error = new Error(message) as AppError;
  error.status = status;
  error.code = code || 'ERROR';
  if (details) error.details = details;
  return error;
};
