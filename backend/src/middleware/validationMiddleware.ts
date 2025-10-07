/**
 * @summary
 * Request validation middleware using Zod schemas.
 * Validates request body, params, and query parameters.
 *
 * @module middleware/validationMiddleware
 * @type middleware
 *
 * @validation
 * - Body validation for POST/PUT/PATCH requests
 * - Params validation for route parameters
 * - Query validation for query strings
 */

import { Request, Response, NextFunction } from 'express';
import { z, ZodSchema } from 'zod';
import { createError } from './errorMiddleware';

export interface ValidationSchemas {
  body?: ZodSchema;
  params?: ZodSchema;
  query?: ZodSchema;
}

export const validationMiddleware = (schemas: ValidationSchemas) => {
  return async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    try {
      if (schemas.body) {
        req.body = await schemas.body.parseAsync(req.body);
      }

      if (schemas.params) {
        req.params = (await schemas.params.parseAsync(req.params)) as Record<string, string>;
      }

      if (schemas.query) {
        req.query = (await schemas.query.parseAsync(req.query)) as Record<string, any>;
      }

      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = createError(
          'Validation failed',
          400,
          'VALIDATION_ERROR',
          error.issues.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          }))
        );
        next(validationError);
      } else {
        next(error);
      }
    }
  };
};
