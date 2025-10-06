/**
 * @component AppProviders
 * @summary Wraps application with all necessary context providers
 * @type provider-wrapper
 * @category core
 *
 * @providers
 * - QueryClientProvider: TanStack Query for server state
 * - BrowserRouter: React Router for navigation
 */

import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { queryClient } from '@/core/lib/queryClient';

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  );
};
