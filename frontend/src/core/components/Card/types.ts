import { HTMLAttributes } from 'react';

export type CardVariant = 'default' | 'bordered' | 'elevated';
export type CardPadding = 'none' | 'sm' | 'default' | 'lg';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
}
