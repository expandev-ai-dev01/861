import { z } from 'zod';

/**
 * @validation emailSchema
 * @summary Email validation schema using Zod
 * @domain core
 * @type validation-schema
 * @category validation
 */
export const emailSchema = z.string().email('Please enter a valid email address');

/**
 * @validation passwordSchema
 * @summary Password validation schema with strength requirements
 * @domain core
 * @type validation-schema
 * @category validation
 */
export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number');

/**
 * @validation requiredStringSchema
 * @summary Required string validation with trimming
 * @domain core
 * @type validation-schema
 * @category validation
 */
export const requiredStringSchema = z.string().trim().min(1, 'This field is required');

/**
 * @utility isValidEmail
 * @summary Validates email format using regex
 * @domain core
 * @type utility-function
 * @category validation
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * @utility sanitizeHtml
 * @summary Sanitizes HTML content using DOMPurify
 * @domain core
 * @type utility-function
 * @category validation
 */
export const sanitizeHtml = (html: string): string => {
  // This is a placeholder - in a real app, you'd use DOMPurify
  // import DOMPurify from 'dompurify';
  // return DOMPurify.sanitize(html);
  return html.replace(/<script[^>]*>.*?<\/script>/gi, '');
};
