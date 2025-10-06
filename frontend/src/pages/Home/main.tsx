/**
 * @page HomePage
 * @summary Welcome page with application overview
 * @domain core
 * @type landing-page
 * @category public
 *
 * @routing
 * - Path: /
 * - Params: none
 * - Query: none
 * - Guards: none
 */

import { Link } from 'react-router-dom';
import { Button } from '@/core/components/Button';

export const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to TODO List App</h1>
        <p className="text-xl text-gray-600 mb-8">
          Organize your tasks efficiently and boost your productivity
        </p>
        <div className="flex justify-center gap-4">
          <Button size="large">Get Started</Button>
          <Button variant="outline" size="large">
            Learn More
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
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
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Create Tasks</h3>
          <p className="text-gray-600">
            Easily create and organize your tasks with title, description, and priority
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
            View all your tasks in an organized list with filtering options
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Track Progress</h3>
          <p className="text-gray-600">Monitor your task completion and stay on top of deadlines</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
