/**
 * @component Header
 * @summary Application header with navigation
 * @domain core
 * @type ui-component
 * @category navigation
 */

import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">TODO List</span>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
