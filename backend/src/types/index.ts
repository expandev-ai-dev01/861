/**
 * @summary
 * Global TypeScript type definitions.
 * Provides shared types and interfaces across the application.
 *
 * @module types
 * @type type-definitions
 */

import { Request } from 'express';

/**
 * Extended Express Request with user context
 */
export interface AuthenticatedRequest extends Request {
  user?: {
    idUser: number;
    idAccount: number;
    email: string;
    [key: string]: any;
  };
}

/**
 * Standard API response structure
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  metadata?: {
    page?: number;
    pageSize?: number;
    total?: number;
    hasNext?: boolean;
    hasPrevious?: boolean;
    timestamp: string;
  };
  timestamp: string;
}

/**
 * Pagination parameters
 */
export interface PaginationParams {
  page: number;
  pageSize: number;
}

/**
 * Multi-tenancy context
 */
export interface TenantContext {
  idAccount: number;
  idUser: number;
}

/**
 * Database operation result
 */
export interface DbOperationResult {
  success: boolean;
  affectedRows?: number;
  insertId?: number;
  data?: any;
}
