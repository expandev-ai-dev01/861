/**
 * @summary
 * Error handling middleware for Express application.
 * Provides standardized error responses and logging.
 *
 * @module middleware/errorMiddleware
 * @type middleware
 *
 * @errorHandling
 * - Validation errors: 400 status
 * - Authentication errors: 401 status
 * - Authorization errors: 403 status
 * - Not found errors: 404 status
 * - Server errors: 500 status
 */

import { Request, Response, NextFunction } from 'express';

export interface AppError extends Error {
  status?: number;
  code?: string;
  details?: any;
}

export const errorMiddleware = (
  error: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const status = error.status || 500;
  const code = error.code || 'INTERNAL_SERVER_ERROR';

  console.error('Error:', {
    message: error.message,
    code,
    status,
    path: req.path,
    method: req.method,
    stack: error.stack,
  });

  res.status(status).json({
    success: false,
    error: {
      code,
      message: error.message,
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
  error.code = code;
  error.details = details;
  return error;
};
