import { NavLink } from 'react-router-dom';
import { clsx } from 'clsx';

/**
 * @component DashboardSidebar
 * @summary Sidebar navigation for dashboard
 * @domain core
 * @type ui-component
 * @category layout
 */
export const DashboardSidebar = () => {
  const navItems = [{ to: '/dashboard', label: 'Dashboard', icon: '📊' }];

  return (
    <aside className="w-64 bg-white shadow-sm min-h-[calc(100vh-4rem)]">
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-3 px-4 py-2 rounded-md transition-colors',
                isActive
                  ? 'bg-primary-50 text-primary-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-50'
              )
            }
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
