/**
 * @types API Response Types
 * @summary Common API response type definitions
 * @domain core
 * @type type-definitions
 * @category api
 */

export type ApiResponse<T = any> = {
  data: T;
  message?: string;
  success: boolean;
};

export type ApiError = {
  message: string;
  code?: string;
  status?: number;
  details?: Record<string, any>;
};

export type PaginationParams = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
};

export type PaginatedResponse<T> = {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};
