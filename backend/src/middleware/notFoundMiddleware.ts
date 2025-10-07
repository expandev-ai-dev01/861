/**
 * @summary
 * 404 Not Found middleware for handling undefined routes.
 * Provides standardized response for non-existent endpoints.
 *
 * @module middleware/notFoundMiddleware
 * @type middleware
 *
 * @errorHandling
 * - Returns 404 status with descriptive error message
 * - Includes requested path in response
 */

import { Request, Response } from 'express';

export const notFoundMiddleware = (req: Request, res: Response): void => {
  res.status(404).json({
    success: false,
    error: {
      code: 'NOT_FOUND',
      message: 'The requested resource was not found',
      path: req.path,
    },
    timestamp: new Date().toISOString(),
  });
};
