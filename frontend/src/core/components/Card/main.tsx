import { HTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';
import type { CardProps } from './types';
import { cardVariants } from './variants';

/**
 * @component Card
 * @summary Reusable card container component
 * @domain core
 * @type ui-component
 * @category layout
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, variant = 'default', padding = 'default', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          cardVariants.base,
          cardVariants.variants[variant],
          cardVariants.padding[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
