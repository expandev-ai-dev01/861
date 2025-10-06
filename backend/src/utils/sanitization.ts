/**
 * @summary
 * Input sanitization utilities for security.
 * Prevents XSS attacks by sanitizing user input.
 *
 * @module utils/sanitization
 * @type utility
 */

/**
 * @function sanitizeString
 * @summary Sanitizes string input to prevent XSS attacks
 * @param {string} input - Input string to sanitize
 * @returns {string} Sanitized string
 */
export const sanitizeString = (input: string): string => {
  if (!input) return '';

  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
};

/**
 * @function sanitizeObject
 * @summary Sanitizes all string properties in an object
 * @param {Record<string, any>} obj - Object to sanitize
 * @returns {Record<string, any>} Sanitized object
 */
export const sanitizeObject = (obj: Record<string, any>): Record<string, any> => {
  const sanitized: Record<string, any> = {};

  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      sanitized[key] = sanitizeString(obj[key]);
    } else if (obj[key] !== null && typeof obj[key] === 'object') {
      sanitized[key] = sanitizeObject(obj[key]);
    } else {
      sanitized[key] = obj[key];
    }
  }

  return sanitized;
};
