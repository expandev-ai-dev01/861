import { clsx } from 'clsx';
import type { LoadingSpinnerProps } from './types';

/**
 * @component LoadingSpinner
 * @summary Displays a loading spinner with customizable size
 * @domain core
 * @type ui-component
 * @category feedback
 */
export const LoadingSpinner = ({ size = 'medium', className }: LoadingSpinnerProps) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div
        className={clsx(
          'animate-spin rounded-full border-2 border-gray-300 border-t-primary-600',
          sizeClasses[size],
          className
        )}
      />
    </div>
  );
};
