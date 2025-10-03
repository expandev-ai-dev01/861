import { z } from 'zod';

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

export const zBit = z.coerce.number().int().min(0).max(1);

export const zDateString = z.string().refine((val) => !isNaN(Date.parse(val)), 'invalidDateFormat');

export const zNumeric = z.coerce.number();

export const zPositiveNumeric = z.coerce.number().positive('valueMustBePositive');

export const zEmail = z.string().email('invalidEmailFormat');

export const zPassword = z.string().min(8, 'passwordMinLength');

export const zPagination = z.object({
  page: z.coerce.number().int().positive().default(1),
  pageSize: z.coerce.number().int().positive().max(100).default(50),
});
