import Link from 'next/link';

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-900 p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <img 
            src="/images/svgs/404.svg" 
            alt="Coming Soon" 
            className="w-64 h-64 mx-auto mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Coming Soon
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            We're working hard to bring you an amazing experience. Our website is currently under construction.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/" 
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 text-center"
            >
              Back to Home
            </Link>
            <a 
              href="mailto:parth@cassaiot.com" 
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Symposium. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
