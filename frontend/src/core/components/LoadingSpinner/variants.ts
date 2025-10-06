import { clsx } from 'clsx';

interface SpinnerVariantsProps {
  size: 'small' | 'medium' | 'large';
  className?: string;
}

export const spinnerVariants = ({ size, className }: SpinnerVariantsProps) => {
  const sizeClasses = {
    small: 'w-4 h-4 border-2',
    medium: 'w-8 h-8 border-3',
    large: 'w-12 h-12 border-4',
  };

  return clsx(
    'animate-spin rounded-full border-primary-600 border-t-transparent',
    sizeClasses[size],
    className
  );
};
