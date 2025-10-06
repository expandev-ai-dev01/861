/**
 * @page NotFoundPage
 * @summary 404 error page for invalid routes
 * @domain core
 * @type error-page
 * @category public
 */

import { Link } from 'react-router-dom';
import { Button } from '@/core/components/Button';

export const NotFoundPage = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/">
          <Button>Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
