/**
 * @component Footer
 * @summary Application footer with copyright and links
 * @domain core
 * @type ui-component
 * @category layout
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-gray-600 text-sm">© {currentYear} TODO List. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-primary-600 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-primary-600 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
