/**
 * @component LoadingSpinner
 * @summary Loading spinner component for async operations
 * @domain core
 * @type ui-component
 * @category feedback
 */

import { LoadingSpinnerProps } from './types';
import { spinnerVariants } from './variants';

export const LoadingSpinner = ({ size = 'medium', className = '' }: LoadingSpinnerProps) => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className={spinnerVariants({ size, className })} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
