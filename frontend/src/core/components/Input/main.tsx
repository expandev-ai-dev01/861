import { forwardRef } from 'react';
import { clsx } from 'clsx';
import type { InputProps } from './types';
import { inputVariants } from './variants';

/**
 * @component Input
 * @summary Styled input component with error states and variants
 * @domain core
 * @type ui-component
 * @category form
 *
 * @features
 * - Error state styling
 * - Size variants
 * - Disabled state
 * - Full accessibility support
 * - Forward ref support
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size = 'medium', error = false, disabled = false, ...props }, ref) => {
    return (
      <input
        className={clsx(inputVariants({ size, error, disabled }), className)}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
