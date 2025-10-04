import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/core/contexts/auth';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';
import { DashboardHeader } from './_impl/DashboardHeader';
import { DashboardSidebar } from './_impl/DashboardSidebar';

/**
 * @layout DashboardLayout
 * @summary Layout for authenticated dashboard pages
 * @domain core
 * @type layout-component
 * @category layout
 */
export const DashboardLayout = () => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <LoadingSpinner size="large" />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
