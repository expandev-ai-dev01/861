import { clsx } from 'clsx';
import type { LoadingSpinnerProps } from './types';

/**
 * @component LoadingSpinner
 * @summary Animated loading spinner with size variants
 * @domain core
 * @type ui-component
 * @category feedback
 *
 * @features
 * - Multiple size variants
 * - Smooth animation
 * - Accessible with proper ARIA labels
 * - Customizable styling
 */
export const LoadingSpinner = ({ size = 'medium', className, ...props }: LoadingSpinnerProps) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
  };

  return (
    <div
      className={clsx(
        'inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="Loading"
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
