/**
 * @page DashboardPage
 * @summary Main dashboard page showing overview
 * @domain dashboard
 * @type dashboard-page
 * @category management
 */
export const DashboardPage = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome to your TODO list dashboard</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Getting Started</h2>
        <p className="text-gray-600">
          This is your dashboard. Feature implementations will be added here.
        </p>
      </div>
    </div>
  );
};

export default DashboardPage;
