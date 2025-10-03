import { clsx } from 'clsx';
import type { LoadingSpinnerProps } from './types';
import { spinnerVariants } from './variants';

/**
 * @component LoadingSpinner
 * @summary Loading spinner component for async operations
 * @domain core
 * @type ui-component
 * @category feedback
 */
export const LoadingSpinner = ({ size = 'md', className }: LoadingSpinnerProps) => {
  return (
    <div className={clsx('flex items-center justify-center', className)}>
      <div className={clsx(spinnerVariants.base, spinnerVariants.sizes[size])}>
        <div className="absolute inset-0 rounded-full border-2 border-gray-200" />
        <div className="absolute inset-0 rounded-full border-2 border-primary-600 border-t-transparent animate-spin" />
      </div>
    </div>
  );
};
