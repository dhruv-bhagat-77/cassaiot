import React from 'react';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import MissionAndVision from './components/MissionAndVision';
import Team from './components/Team';

export const metadata = {
  title: 'About Us - CASS AIOT',
  description: 'Learn about CASS AIOT, our mission, vision, and the team behind our innovative industrial AI and robotics solutions.',
};

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Introduction />
      <MissionAndVision />
      <Team />
    </main>
  );
};

export default AboutPage;
