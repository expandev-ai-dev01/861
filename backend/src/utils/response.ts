/**
 * @summary
 * Standardized API response utilities.
 * Provides consistent response formatting across all endpoints.
 *
 * @module utils/response
 * @type utility
 */

export interface SuccessResponse<T> {
  success: true;
  data: T;
  metadata?: {
    page?: number;
    pageSize?: number;
    total?: number;
    timestamp: string;
  };
}

export interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}

export const successResponse = <T>(
  data: T,
  metadata?: Omit<SuccessResponse<T>['metadata'], 'timestamp'>
): SuccessResponse<T> => {
  return {
    success: true,
    data,
    ...(metadata && {
      metadata: {
        ...metadata,
        timestamp: new Date().toISOString(),
      },
    }),
  };
};

export const errorResponse = (code: string, message: string, details?: any): ErrorResponse => {
  return {
    success: false,
    error: {
      code,
      message,
      ...(details && { details }),
    },
    timestamp: new Date().toISOString(),
  };
};
