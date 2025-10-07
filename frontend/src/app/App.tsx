import { AppProviders } from './providers';
import { AppRouter } from './router';

/**
 * @component App
 * @summary Root application component that orchestrates providers and routing
 * @domain core
 * @type root-component
 * @category application
 */
export const App = () => {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
};
