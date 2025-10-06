/**
 * @summary
 * Global error handling middleware.
 * Provides consistent error responses and logging.
 *
 * @module middleware/error
 * @type middleware
 */

import { Request, Response, NextFunction } from 'express';

/**
 * @interface AppError
 * @description Custom error interface
 *
 * @property {number} statusCode - HTTP status code
 * @property {string} message - Error message
 * @property {string} code - Error code
 * @property {any} details - Additional error details
 */
export interface AppError extends Error {
  statusCode?: number;
  code?: string;
  details?: any;
}

/**
 * @summary
 * Global error handling middleware
 *
 * @param {AppError} error - Error object
 * @param {Request} req - Express request
 * @param {Response} res - Express response
 * @param {NextFunction} next - Express next function
 */
export function errorMiddleware(
  error: AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal server error';
  const code = error.code || 'INTERNAL_ERROR';

  // Log error for debugging
  console.error('Error:', {
    code,
    message,
    statusCode,
    path: req.path,
    method: req.method,
    stack: error.stack,
  });

  res.status(statusCode).json({
    success: false,
    error: {
      code,
      message,
      details: process.env.NODE_ENV === 'development' ? error.details : undefined,
    },
    timestamp: new Date().toISOString(),
  });
}

/**
 * @summary
 * Creates a custom application error
 *
 * @param {string} message - Error message
 * @param {number} statusCode - HTTP status code
 * @param {string} code - Error code
 * @returns {AppError} Custom error object
 */
export function createError(
  message: string,
  statusCode: number = 500,
  code: string = 'ERROR'
): AppError {
  const error = new Error(message) as AppError;
  error.statusCode = statusCode;
  error.code = code;
  return error;
}
