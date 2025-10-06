/**
 * @utility cn
 * @summary Utility for merging Tailwind CSS classes
 * @category styling
 *
 * @description
 * Combines clsx for conditional classes and tailwind-merge
 * to handle Tailwind class conflicts
 */

import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
