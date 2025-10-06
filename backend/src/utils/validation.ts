/**
 * @summary
 * Common validation utilities and Zod schema helpers.
 * Provides reusable validation patterns for the application.
 *
 * @module utils/validation
 * @type utility
 */

import { z } from 'zod';

// Common string validations
export const zString = z.string().min(1, 'Field is required');
export const zNullableString = z.string().nullable();
export const zName = z.string().min(1).max(100);
export const zDescription = z.string().min(1).max(500);
export const zNullableDescription = z.string().max(500).nullable();

// Common number validations
export const zId = z.coerce.number().int().positive();
export const zFK = z.coerce.number().int().positive();
export const zNullableFK = z.coerce.number().int().positive().nullable();

// Common boolean validations
export const zBit = z.coerce.number().int().min(0).max(1);
export const zBoolean = z.boolean();

// Date validations
export const zDate = z.coerce.date();
export const zDateString = z.string().datetime();
export const zNullableDate = z.coerce.date().nullable();

// Email validation
export const zEmail = z.string().email();

// Pagination helpers
export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  pageSize: z.coerce.number().int().positive().max(100).default(50),
});

export type PaginationParams = z.infer<typeof paginationSchema>;
