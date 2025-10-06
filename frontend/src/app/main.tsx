/**
 * @module app/main
 * @summary Application entry point with providers and global configuration
 * @type application-entry
 * @category core
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { AppProviders } from './providers';
import '@/assets/styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
);
