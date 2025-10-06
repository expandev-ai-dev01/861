/**
 * @module core/types
 * @summary Global application types and interfaces
 * @category core
 */

export type ApiResponse<T> = {
  data: T;
  message?: string;
  success: boolean;
};

export type PaginatedResponse<T> = {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

export type ApiError = {
  message: string;
  code?: string;
  status?: number;
  details?: Record<string, any>;
};

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export type SortOrder = 'asc' | 'desc';

export type FilterOperator = 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'like' | 'in';

export interface BaseEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
}
