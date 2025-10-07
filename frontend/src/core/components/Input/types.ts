import type { InputHTMLAttributes } from 'react';

export type InputSize = 'small' | 'medium' | 'large';

export type InputProps = {
  size?: InputSize;
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
