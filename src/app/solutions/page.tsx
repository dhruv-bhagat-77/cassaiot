'use client';

import React from 'react';
import Hero from './components/Hero';
import dynamic from 'next/dynamic';

// Dynamically import the SolutionsTabs component with no SSR
const SolutionsTabs = dynamic(() => import('./components/SolutionsTabs'), {
  ssr: false,
});

// export const metadata = {
//   title: 'Solutions - CASS AIOT',
//   description: 'Explore our comprehensive AI and IoT solutions for industrial automation and digital transformation.',
// };

const SolutionsPage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Dark background */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-900 dark:to-gray-800">
        <Hero />
      </div>
      
      {/* Solutions Tabs Section */}
      <SolutionsTabs />
    </main>
  );
};

export default SolutionsPage;
