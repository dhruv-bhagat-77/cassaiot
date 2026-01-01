import React from 'react';
import { Lightbulb, Award, Shield, Users } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      id: 1,
      title: 'INNOVATION',
      description: 'We embrace creativity and forward-thinking to develop cutting-edge solutions that push the boundaries of what\'s possible in AI and robotics.',
      icon: <Lightbulb className="w-10 h-10 text-blue-600" />,
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
      textColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      id: 2,
      title: 'EXCELLENCE',
      description: 'We are committed to delivering the highest quality in everything we do, setting industry standards for performance and reliability.',
      icon: <Award className="w-10 h-10 text-green-600" />,
      bgColor: 'bg-green-50 dark:bg-green-950/30',
      textColor: 'text-green-600 dark:text-green-400'
    },
    {
      id: 3,
      title: 'INTEGRITY',
      description: 'We conduct our business with honesty, transparency, and ethical practices, building trust with our clients and partners.',
      icon: <Shield className="w-10 h-10 text-amber-600" />,
      bgColor: 'bg-amber-50 dark:bg-amber-950/30',
      textColor: 'text-amber-600 dark:text-amber-400'
    },
    {
      id: 4,
      title: 'COLLABORATION',
      description: 'We believe in the power of teamwork and partnerships to achieve extraordinary results that benefit all stakeholders.',
      icon: <Users className="w-10 h-10 text-purple-600" />,
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
      textColor: 'text-purple-600 dark:text-purple-400'
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-4">
          OUR CORE VALUES
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Guiding principles that define who we are and how we work
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div 
              key={value.id} 
              className={`p-6 rounded-lg ${value.bgColor} transition-all duration-300 hover:shadow-md hover:-translate-y-1`}
            >
              <div className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mb-4`}>
                <div className={`p-3 rounded-full ${value.bgColor.replace('50', '100')} dark:bg-opacity-20`}>
                  {value.icon}
                </div>
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${value.textColor}`}>
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
