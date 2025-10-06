/**
 * @summary
 * Zod validation utilities and custom validators.
 * Provides reusable validation schemas for common data types.
 *
 * @module utils/zodValidation
 * @type utility
 */

import { z } from 'zod';

/**
 * @constant zString
 * @description Non-empty string validation
 */
export const zString = z.string().min(1, 'stringRequired');

/**
 * @constant zNullableString
 * @description Optional string validation
 */
export const zNullableString = z.string().nullable().optional();

/**
 * @constant zName
 * @description Name field validation (max 100 characters)
 */
export const zName = z.string().min(1, 'nameRequired').max(100, 'nameTooLong');

/**
 * @constant zDescription
 * @description Description field validation (max 500 characters)
 */
export const zDescription = z.string().min(1, 'descriptionRequired').max(500, 'descriptionTooLong');

/**
 * @constant zNullableDescription
 * @description Optional description field validation
 */
export const zNullableDescription = z.string().max(500, 'descriptionTooLong').nullable().optional();

/**
 * @constant zFK
 * @description Foreign key validation (positive integer)
 */
export const zFK = z.coerce.number().int().positive('invalidForeignKey');

/**
 * @constant zNullableFK
 * @description Optional foreign key validation
 */
export const zNullableFK = z.coerce
  .number()
  .int()
  .positive('invalidForeignKey')
  .nullable()
  .optional();

/**
 * @constant zBit
 * @description Boolean bit validation (0 or 1)
 */
export const zBit = z.coerce.number().int().min(0).max(1, 'invalidBitValue');

/**
 * @constant zDateString
 * @description Date string validation
 */
export const zDateString = z.string().refine((val) => !isNaN(Date.parse(val)), 'invalidDateFormat');

/**
 * @constant zEmail
 * @description Email validation
 */
export const zEmail = z.string().email('invalidEmailFormat');

/**
 * @constant zNumeric
 * @description Numeric value validation
 */
export const zNumeric = z.coerce.number();

/**
 * @constant zPositiveNumeric
 * @description Positive numeric value validation
 */
export const zPositiveNumeric = z.coerce.number().positive('valueMustBePositive');
