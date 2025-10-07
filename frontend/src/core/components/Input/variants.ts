import { clsx } from 'clsx';
import type { InputSize } from './types';

type InputVariantsProps = {
  size?: InputSize;
  error?: boolean;
  disabled?: boolean;
};

/**
 * @variants inputVariants
 * @summary Input styling variants using Tailwind CSS classes
 * @domain core
 * @type style-variants
 * @category styling
 */
export const inputVariants = ({
  size = 'medium',
  error = false,
  disabled = false,
}: InputVariantsProps) => {
  const baseClasses = [
    'block',
    'w-full',
    'rounded-md',
    'border',
    'bg-white',
    'px-3',
    'text-gray-900',
    'placeholder-gray-500',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'transition-colors',
  ];

  const stateClasses = {
    default: ['border-gray-300', 'focus:border-primary-500', 'focus:ring-primary-500'],
    error: ['border-red-300', 'focus:border-red-500', 'focus:ring-red-500'],
    disabled: ['bg-gray-50', 'text-gray-500', 'cursor-not-allowed'],
  };

  const sizeClasses = {
    small: ['h-8', 'text-sm'],
    medium: ['h-10', 'text-sm'],
    large: ['h-12', 'text-base'],
  };

  let currentStateClasses = stateClasses.default;
  if (disabled) {
    currentStateClasses = [...currentStateClasses, ...stateClasses.disabled];
  } else if (error) {
    currentStateClasses = stateClasses.error;
  }

  return clsx([...baseClasses, ...currentStateClasses, ...sizeClasses[size]]);
};
