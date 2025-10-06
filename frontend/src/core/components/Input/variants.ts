import { clsx } from 'clsx';

interface InputVariantsProps {
  error: boolean;
  className?: string;
}

export const inputVariants = ({ error, className }: InputVariantsProps) => {
  const baseClasses =
    'block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors';

  const stateClasses = error
    ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
    : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500';

  return clsx(baseClasses, stateClasses, className);
};
