/**
 * @summary
 * Reusable Zod validation schemas and utilities.
 * Provides common validation patterns for consistent data validation.
 *
 * @module utils/zodValidation
 * @type utility
 */

import { z } from 'zod';

// String validations
export const zString = z.string().min(1, 'Field is required');
export const zNullableString = z.string().nullable();
export const zName = z
  .string()
  .min(1, 'Name is required')
  .max(100, 'Name must be 100 characters or less');
export const zDescription = z
  .string()
  .min(1, 'Description is required')
  .max(500, 'Description must be 500 characters or less');
export const zNullableDescription = z
  .string()
  .max(500, 'Description must be 500 characters or less')
  .nullable();

// Number validations
export const zNumber = z.number();
export const zPositiveNumber = z.number().positive('Value must be positive');
export const zNonNegativeNumber = z.number().nonnegative('Value must be non-negative');
export const zFK = z.number().int().positive('Invalid ID');
export const zNullableFK = z.number().int().positive('Invalid ID').nullable();

// Boolean validations
export const zBit = z.union([z.literal(0), z.literal(1)]);
export const zBoolean = z.boolean();

// Date validations
export const zDate = z.date();
export const zDateString = z.string().datetime();
export const zNullableDate = z.date().nullable();
export const zNullableDateString = z.string().datetime().nullable();

// Email validation
export const zEmail = z.string().email('Invalid email format');

// Coercion helpers
export const zCoerceNumber = z.coerce.number();
export const zCoercePositiveNumber = z.coerce.number().positive('Value must be positive');
export const zCoerceFK = z.coerce.number().int().positive('Invalid ID');

// Pagination schemas
export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  pageSize: z.coerce.number().int().positive().max(100).default(50),
});

// Common parameter schemas
export const idParamSchema = z.object({
  id: zCoerceFK,
});

export const accountParamSchema = z.object({
  idAccount: zCoerceFK,
});
