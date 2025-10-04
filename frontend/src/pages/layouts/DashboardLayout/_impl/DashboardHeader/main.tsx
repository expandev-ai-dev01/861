import { useAuth } from '@/core/contexts/auth';
import { Button } from '@/core/components/Button';

/**
 * @component DashboardHeader
 * @summary Header component for dashboard layout
 * @domain core
 * @type ui-component
 * @category layout
 */
export const DashboardHeader = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-gray-900">TODO List</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-700">Welcome, {user?.name}</span>
            <Button variant="outline" size="small" onClick={logout}>
              Logout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
