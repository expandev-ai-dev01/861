import { clsx } from 'clsx';
import type { ButtonVariant, ButtonSize } from './types';

type ButtonVariantsProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

/**
 * @variants buttonVariants
 * @summary Button styling variants using Tailwind CSS classes
 * @domain core
 * @type style-variants
 * @category styling
 */
export const buttonVariants = ({ variant = 'primary', size = 'medium' }: ButtonVariantsProps) => {
  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-md',
    'font-medium',
    'transition-colors',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-primary-500',
    'focus-visible:ring-offset-2',
    'disabled:pointer-events-none',
    'disabled:opacity-50',
  ];

  const variantClasses = {
    primary: ['bg-primary-600', 'text-white', 'hover:bg-primary-700', 'active:bg-primary-800'],
    secondary: ['bg-gray-100', 'text-gray-900', 'hover:bg-gray-200', 'active:bg-gray-300'],
    outline: [
      'border',
      'border-gray-300',
      'bg-white',
      'text-gray-700',
      'hover:bg-gray-50',
      'active:bg-gray-100',
    ],
    ghost: ['text-gray-700', 'hover:bg-gray-100', 'active:bg-gray-200'],
    danger: ['bg-red-600', 'text-white', 'hover:bg-red-700', 'active:bg-red-800'],
  };

  const sizeClasses = {
    small: ['h-8', 'px-3', 'text-sm'],
    medium: ['h-10', 'px-4', 'text-sm'],
    large: ['h-12', 'px-6', 'text-base'],
  };

  return clsx([...baseClasses, ...variantClasses[variant], ...sizeClasses[size]]);
};
