/**
 * @utility dateUtils
 * @summary Date formatting and manipulation utilities
 * @category utilities
 */

import { format, parseISO, isValid, formatDistanceToNow } from 'date-fns';

export const dateUtils = {
  format: (date: string | Date, formatStr: string = 'PPP'): string => {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return isValid(dateObj) ? format(dateObj, formatStr) : 'Invalid date';
  },

  formatRelative: (date: string | Date): string => {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return isValid(dateObj) ? formatDistanceToNow(dateObj, { addSuffix: true }) : 'Invalid date';
  },

  isValidDate: (date: string | Date): boolean => {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return isValid(dateObj);
  },

  toISOString: (date: Date): string => {
    return date.toISOString();
  },
};
