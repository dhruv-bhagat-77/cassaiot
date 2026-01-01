import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO & Founder',
    image: '/images/team/member1.jpg',
    description: 'Expert in AI and industrial automation with over 15 years of experience.'
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'CTO',
    image: '/images/team/member2.jpg',
    description: 'Technology visionary specializing in IoT and smart manufacturing solutions.'
  },
  {
    id: 3,
    name: 'Alex Johnson',
    role: 'Lead Engineer',
    image: '/images/team/member3.jpg',
    description: 'Robotics expert with a passion for innovative automation solutions.'
  },
  {
    id: 4,
    name: 'Sarah Williams',
    role: 'Head of Research',
    image: '/images/team/member4.jpg',
    description: 'Leading our research in artificial intelligence and machine learning.'
  }
];

const Team = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">OUR TEAM</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Meet the brilliant minds behind our success. Our team combines expertise in AI, robotics, and industrial automation.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl dark:shadow-gray-800/20"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
