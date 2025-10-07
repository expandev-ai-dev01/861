import { forwardRef } from 'react';
import { clsx } from 'clsx';
import { LoadingSpinner } from '../LoadingSpinner';
import type { ButtonProps } from './types';
import { buttonVariants } from './variants';

/**
 * @component Button
 * @summary Versatile button component with multiple variants and states
 * @domain core
 * @type ui-component
 * @category form
 *
 * @features
 * - Multiple visual variants (primary, secondary, outline, ghost)
 * - Size variants (small, medium, large)
 * - Loading state with spinner
 * - Disabled state
 * - Full accessibility support
 * - Forward ref support
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'medium',
      loading = false,
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={clsx(buttonVariants({ variant, size }), className)}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <LoadingSpinner size="small" className="mr-2" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
