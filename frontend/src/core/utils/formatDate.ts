import { format, formatDistanceToNow, isValid, parseISO } from 'date-fns';

/**
 * @utility formatDate
 * @summary Formats dates in various formats
 * @domain core
 * @type utility-function
 * @category formatting
 */
export const formatDate = (date: string | Date, formatStr: string = 'PPP'): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;

  if (!isValid(dateObj)) {
    return 'Invalid date';
  }

  return format(dateObj, formatStr);
};

/**
 * @utility formatRelativeDate
 * @summary Formats date as relative time (e.g., "2 hours ago")
 */
export const formatRelativeDate = (date: string | Date): string => {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;

  if (!isValid(dateObj)) {
    return 'Invalid date';
  }

  return formatDistanceToNow(dateObj, { addSuffix: true });
};
