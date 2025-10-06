/**
 * @utility cn
 * @summary Utility function for merging Tailwind CSS classes
 * @domain core
 * @type utility-function
 * @category styling
 */

import { clsx, ClassValue } from 'clsx';

export const cn = (...inputs: ClassValue[]) => {
  return clsx(inputs);
};
