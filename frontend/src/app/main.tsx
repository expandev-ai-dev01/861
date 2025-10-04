import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Providers } from './providers';
import '@/assets/styles/globals.css';

/**
 * @entrypoint main
 * @summary Application entry point that initializes React and renders the root component
 * @type application-bootstrap
 * @category core
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
