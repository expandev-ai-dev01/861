/**
 * @types Common Types
 * @summary Shared type definitions used across the application
 * @domain core
 * @type type-definitions
 * @category common
 */

export type ID = string | number;

export type Timestamp = string | Date;

export type Status = 'active' | 'inactive' | 'pending' | 'archived';

export type Priority = 'low' | 'medium' | 'high' | 'urgent';

export type BaseEntity = {
  id: ID;
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

export type SelectOption<T = string> = {
  label: string;
  value: T;
  disabled?: boolean;
};

export type LoadingState = {
  isLoading: boolean;
  error?: string | null;
};

export type AsyncOperation<T = void> = {
  execute: (...args: any[]) => Promise<T>;
  isLoading: boolean;
  error?: string | null;
  data?: T;
};
