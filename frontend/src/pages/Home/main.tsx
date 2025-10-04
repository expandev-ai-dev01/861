import { useNavigate } from 'react-router-dom';
import { Button } from '@/core/components/Button';

/**
 * @page HomePage
 * @summary Landing page for the application
 * @domain core
 * @type landing-page
 * @category public
 */
export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="max-w-2xl mx-auto text-center px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">TODO List App</h1>
        <p className="text-xl text-gray-600 mb-8">
          Organize your tasks efficiently and boost your productivity
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="large" onClick={() => navigate('/auth/login')}>
            Get Started
          </Button>
          <Button variant="outline" size="large" onClick={() => navigate('/auth/register')}>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
