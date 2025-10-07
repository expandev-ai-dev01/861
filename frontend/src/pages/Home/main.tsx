import { Link } from 'react-router-dom';
import { Button } from '@/core/components/Button';

/**
 * @page HomePage
 * @summary Welcome page with introduction and navigation to main features
 * @domain core
 * @type landing-page
 * @category public
 *
 * @routing
 * - Path: /
 * - Params: none
 * - Query: none
 * - Guards: none
 *
 * @layout
 * - Layout: RootLayout
 * - Sections: Hero, Features, CTA
 * - Navigation: Links to main features
 */
export const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Todo List App</h1>
        <p className="text-xl text-gray-600 mb-8">
          Organize your tasks efficiently and boost your productivity
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link to="/tasks">View Tasks</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/tasks">Create New Task</Link>
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 gap-8 py-12">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-primary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Create Tasks</h3>
          <p className="text-gray-600">
            Easily create new tasks with title, description, due date, and priority levels.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-primary-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">List Tasks</h3>
          <p className="text-gray-600">
            View all your tasks in an organized list with filtering and sorting options.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to get organized?</h2>
        <p className="text-gray-600 mb-6">
          Start managing your tasks today and experience the power of organized productivity.
        </p>
        <Button size="large" asChild>
          <Link to="/tasks">Get Started</Link>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
