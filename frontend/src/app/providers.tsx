/**
 * @component AppProviders
 * @summary Centralized provider configuration for the application
 * @type provider-wrapper
 * @category core
 *
 * @description
 * Wraps the application with all necessary context providers:
 * - QueryClientProvider for TanStack Query
 * - Future providers can be added here
 */

import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/core/lib/queryClient';

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
