import { Outlet } from 'react-router-dom';
import { Header } from './_impl/Header';
import { Footer } from './_impl/Footer';

/**
 * @layout RootLayout
 * @summary Main application layout with header, content area, and footer
 * @domain core
 * @type layout-component
 * @category layout
 *
 * @features
 * - Responsive design
 * - Consistent header and footer
 * - Main content area with proper spacing
 * - Outlet for nested routes
 */
export const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
