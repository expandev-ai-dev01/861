/**
 * @component Footer
 * @summary Application footer with copyright and links
 * @domain core
 * @type layout-component
 * @category layout
 */
export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Todo List App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
