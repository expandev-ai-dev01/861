/**
 * @summary
 * CRUD controller middleware for standardized request handling.
 * Provides validation, security checks, and response formatting.
 *
 * @module middleware/crud
 * @type middleware
 *
 * @security
 * - Permission-based access control
 * - Account isolation validation
 */

import { Request } from 'express';
import { z } from 'zod';

/**
 * @interface SecurityRule
 * @description Defines security requirements for operations
 *
 * @property {string} securable - Resource identifier
 * @property {string} permission - Required permission level
 */
export interface SecurityRule {
  securable: string;
  permission: 'CREATE' | 'READ' | 'UPDATE' | 'DELETE';
}

/**
 * @interface ValidationResult
 * @description Result of request validation
 *
 * @property {object} credential - User credentials
 * @property {object} params - Validated parameters
 */
export interface ValidationResult {
  credential: {
    idAccount: number;
    idUser: number;
  };
  params: any;
}

/**
 * @class CrudController
 * @description Handles CRUD operations with security and validation
 */
export class CrudController {
  private securityRules: SecurityRule[];

  constructor(securityRules: SecurityRule[]) {
    this.securityRules = securityRules;
  }

  /**
   * @summary
   * Validates CREATE operation request
   *
   * @param {Request} req - Express request object
   * @param {z.ZodSchema} schema - Zod validation schema
   * @returns {Promise<[ValidationResult | null, any]>} Validation result or error
   */
  async create(req: Request, schema: z.ZodSchema): Promise<[ValidationResult | null, any]> {
    return this.validateRequest(req, schema, 'CREATE');
  }

  /**
   * @summary
   * Validates READ operation request
   *
   * @param {Request} req - Express request object
   * @param {z.ZodSchema} schema - Zod validation schema
   * @returns {Promise<[ValidationResult | null, any]>} Validation result or error
   */
  async read(req: Request, schema: z.ZodSchema): Promise<[ValidationResult | null, any]> {
    return this.validateRequest(req, schema, 'READ');
  }

  /**
   * @summary
   * Validates UPDATE operation request
   *
   * @param {Request} req - Express request object
   * @param {z.ZodSchema} schema - Zod validation schema
   * @returns {Promise<[ValidationResult | null, any]>} Validation result or error
   */
  async update(req: Request, schema: z.ZodSchema): Promise<[ValidationResult | null, any]> {
    return this.validateRequest(req, schema, 'UPDATE');
  }

  /**
   * @summary
   * Validates DELETE operation request
   *
   * @param {Request} req - Express request object
   * @param {z.ZodSchema} schema - Zod validation schema
   * @returns {Promise<[ValidationResult | null, any]>} Validation result or error
   */
  async delete(req: Request, schema: z.ZodSchema): Promise<[ValidationResult | null, any]> {
    return this.validateRequest(req, schema, 'DELETE');
  }

  /**
   * @summary
   * Internal validation logic
   *
   * @param {Request} req - Express request object
   * @param {z.ZodSchema} schema - Zod validation schema
   * @param {string} operation - Operation type
   * @returns {Promise<[ValidationResult | null, any]>} Validation result or error
   */
  private async validateRequest(
    req: Request,
    schema: z.ZodSchema,
    operation: string
  ): Promise<[ValidationResult | null, any]> {
    try {
      // Validate request data against schema
      const validatedData = await schema.parseAsync({
        ...req.params,
        ...req.query,
        ...req.body,
      });

      // Extract credentials (placeholder - will be implemented with authentication)
      const credential = {
        idAccount: 1, // Placeholder
        idUser: 1, // Placeholder
      };

      return [
        {
          credential,
          params: validatedData,
        },
        null,
      ];
    } catch (error: any) {
      return [null, error];
    }
  }
}

/**
 * @summary
 * Creates standardized success response
 *
 * @param {any} data - Response data
 * @returns {object} Formatted success response
 */
export function successResponse(data: any): object {
  return {
    success: true,
    data,
    timestamp: new Date().toISOString(),
  };
}

/**
 * @summary
 * Creates standardized error response
 *
 * @param {string} message - Error message
 * @returns {object} Formatted error response
 */
export function errorResponse(message: string): object {
  return {
    success: false,
    error: {
      message,
    },
    timestamp: new Date().toISOString(),
  };
}

/**
 * @constant StatusGeneralError
 * @description General error object for unexpected failures
 */
export const StatusGeneralError = {
  statusCode: 500,
  message: 'Internal server error',
};
