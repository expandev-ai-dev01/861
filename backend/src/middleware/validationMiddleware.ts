/**
 * @summary
 * Request validation middleware using Zod schemas.
 * Validates request body, params, and query parameters.
 *
 * @module middleware/validationMiddleware
 * @type middleware
 *
 * @validation
 * Uses Zod for runtime type checking and validation
 */

import { Request, Response, NextFunction } from 'express';
import { z, ZodSchema } from 'zod';
import { createError } from './errorMiddleware';

export const validateBody = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.body = await schema.parseAsync(req.body);
      next();
    } catch (error: any) {
      next(createError('Validation failed', 400, 'VALIDATION_ERROR', error.errors));
    }
  };
};

export const validateParams = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.params = await schema.parseAsync(req.params);
      next();
    } catch (error: any) {
      next(createError('Parameter validation failed', 400, 'VALIDATION_ERROR', error.errors));
    }
  };
};

export const validateQuery = (schema: ZodSchema) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      req.query = await schema.parseAsync(req.query);
      next();
    } catch (error: any) {
      next(createError('Query validation failed', 400, 'VALIDATION_ERROR', error.errors));
    }
  };
};
