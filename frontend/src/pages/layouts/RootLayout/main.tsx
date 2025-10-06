/**
 * @component RootLayout
 * @summary Root layout component providing base structure for all pages
 * @domain core
 * @type layout-component
 * @category layout
 *
 * @description
 * Provides the main application structure with header, main content area,
 * and footer. All pages are rendered within this layout.
 */

import { Outlet } from 'react-router-dom';
import { Header } from './_impl/Header';
import { Footer } from './_impl/Footer';

export const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
