import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @utility cn
 * @summary Utility function to merge Tailwind CSS classes
 * @domain core
 * @type utility-function
 * @category styling
 *
 * @description
 * Combines clsx for conditional classes and tailwind-merge for
 * proper Tailwind CSS class deduplication and conflict resolution.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
