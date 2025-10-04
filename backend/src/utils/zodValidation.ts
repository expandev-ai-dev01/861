import { z } from 'zod';

// Common validation utilities
export const zString = z.string().min(1, 'stringRequired');
export const zNullableString = z.string().nullable();

export const zName = z.string().min(1, 'nameRequired').max(100, 'nameMaxLength');
export const zNullableDescription = z
  .string()
  .max(500, 'descriptionMaxLength')
  .nullable()
  .default('');

export const zFK = z.coerce.number().int().positive('foreignKeyMustBePositive');
export const zNullableFK = z.coerce.number().int().positive('foreignKeyMustBePositive').nullable();

export const zBit = z.coerce.number().int().min(0).max(1, 'bitValueInvalid');

export const zDateString = z.string().refine((val) => !isNaN(Date.parse(val)), 'invalidDateFormat');

export const zNullableDateString = z
  .string()
  .refine((val) => !isNaN(Date.parse(val)), 'invalidDateFormat')
  .nullable();

export const zEmail = z.string().email('invalidEmailFormat');

export const zNumeric = z.coerce.number();
export const zNullableNumeric = z.coerce.number().nullable();

export const zPositiveNumeric = z.coerce.number().positive('valueMustBePositive');
export const zNonNegativeNumeric = z.coerce.number().min(0, 'valueMustBeNonNegative');
