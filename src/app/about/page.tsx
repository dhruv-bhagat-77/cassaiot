import React from 'react';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import MissionAndVision from './components/MissionAndVision';
import Methodology from './components/Methodology';

export const metadata = {
  title: 'About Us - CASS AIOT',
  description: 'Learn about CASS AIOT, our mission, vision, and the team behind our innovative industrial AI and robotics solutions.',
};

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Dark background */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 dark:from-gray-900 dark:to-gray-800">
        <Hero />
      </div>
      
      {/* Introduction Section - Light gray background */}
      <div className="bg-gray-50 dark:bg-gray-900">
        <Introduction />
      </div>
      
      {/* Mission & Vision Section - Light gray background with subtle pattern */}
      <div className="relative bg-gray-50 dark:bg-gray-900/50 overflow-hidden">
        <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-geometric.png')]"></div>
        <div className="relative">
          <MissionAndVision />
        </div>
      </div>
      
      {/* Methodology Section - Light blue gradient */}
      <div className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <Methodology />
      </div>
    </main>
  );
};

export default AboutPage;
