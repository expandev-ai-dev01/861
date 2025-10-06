/**
 * @summary
 * Centralized type definitions exports.
 * Provides access to all shared TypeScript types and interfaces.
 *
 * @module types
 * @type type-definitions
 */

// Common types
export interface BaseEntity {
  id: number;
  idAccount: number;
  dateCreated: Date;
  dateModified: Date;
  deleted: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  metadata: {
    page: number;
    pageSize: number;
    total: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}
