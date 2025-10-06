/**
 * @summary
 * Request validation middleware using Zod schemas.
 * Provides type-safe request validation.
 *
 * @module middleware/validation
 * @type middleware
 */

import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

/**
 * @summary
 * Creates validation middleware for request body
 *
 * @param {z.ZodSchema} schema - Zod validation schema
 * @returns {Function} Express middleware function
 */
export function validateBody(schema: z.ZodSchema) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.body = await schema.parseAsync(req.body);
      next();
    } catch (error: any) {
      res.status(400).json({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Request validation failed',
          details: error.errors,
        },
        timestamp: new Date().toISOString(),
      });
    }
  };
}

/**
 * @summary
 * Creates validation middleware for request parameters
 *
 * @param {z.ZodSchema} schema - Zod validation schema
 * @returns {Function} Express middleware function
 */
export function validateParams(schema: z.ZodSchema) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.params = await schema.parseAsync(req.params);
      next();
    } catch (error: any) {
      res.status(400).json({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Parameter validation failed',
          details: error.errors,
        },
        timestamp: new Date().toISOString(),
      });
    }
  };
}

/**
 * @summary
 * Creates validation middleware for query parameters
 *
 * @param {z.ZodSchema} schema - Zod validation schema
 * @returns {Function} Express middleware function
 */
export function validateQuery(schema: z.ZodSchema) {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.query = await schema.parseAsync(req.query);
      next();
    } catch (error: any) {
      res.status(400).json({
        success: false,
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Query validation failed',
          details: error.errors,
        },
        timestamp: new Date().toISOString(),
      });
    }
  };
}
