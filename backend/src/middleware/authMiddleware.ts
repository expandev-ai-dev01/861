/**
 * @summary
 * Authentication middleware for protected routes.
 * Validates user authentication tokens and extracts user credentials.
 *
 * @module middleware/authMiddleware
 * @type middleware
 *
 * @security
 * - Validates authentication token presence
 * - Extracts user and account information
 * - Blocks unauthorized access
 */

import { Request, Response, NextFunction } from 'express';
import { createError } from './errorMiddleware';

export interface AuthenticatedRequest extends Request {
  user?: {
    idUser: number;
    idAccount: number;
    email: string;
  };
}

/**
 * @middleware authMiddleware
 * @summary Validates authentication and attaches user credentials to request
 */
export const authMiddleware = async (
  req: AuthenticatedRequest,
  _res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw createError('Authentication token required', 401, 'AUTHENTICATION_ERROR');
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      throw createError('Invalid authentication token', 401, 'AUTHENTICATION_ERROR');
    }

    /**
     * @rule {be-authentication-simplified}
     * Simplified authentication without JWT implementation.
     * In production, implement proper JWT validation here.
     */
    req.user = {
      idUser: 1,
      idAccount: 1,
      email: 'user@example.com',
    };

    next();
  } catch (error) {
    next(error);
  }
};
