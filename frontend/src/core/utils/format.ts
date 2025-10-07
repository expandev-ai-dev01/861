import { format, formatDistanceToNow, isValid } from 'date-fns';

/**
 * @utility formatDate
 * @summary Formats a date using date-fns with fallback
 * @domain core
 * @type utility-function
 * @category formatting
 */
export const formatDate = (date: Date | string | number, formatStr: string = 'PPP'): string => {
  const dateObj = new Date(date);
  if (!isValid(dateObj)) {
    return 'Invalid date';
  }
  return format(dateObj, formatStr);
};

/**
 * @utility formatRelativeTime
 * @summary Formats a date as relative time (e.g., "2 hours ago")
 * @domain core
 * @type utility-function
 * @category formatting
 */
export const formatRelativeTime = (date: Date | string | number): string => {
  const dateObj = new Date(date);
  if (!isValid(dateObj)) {
    return 'Invalid date';
  }
  return formatDistanceToNow(dateObj, { addSuffix: true });
};

/**
 * @utility formatCurrency
 * @summary Formats a number as currency
 * @domain core
 * @type utility-function
 * @category formatting
 */
export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};

/**
 * @utility truncateText
 * @summary Truncates text to specified length with ellipsis
 * @domain core
 * @type utility-function
 * @category formatting
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength).trim() + '...';
};
