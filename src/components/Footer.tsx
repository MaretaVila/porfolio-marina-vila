export function Footer() {
  return (
    <footer className="py-8 px-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-medium text-gray-900">Marina Vila</p>
            <p className="text-sm text-gray-600">UX/UI Designer</p>
          </div>
          
          <div className="text-sm text-gray-600">
            © 2024 Marina Vila. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}