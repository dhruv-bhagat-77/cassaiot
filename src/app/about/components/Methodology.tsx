import React from 'react';
import Image from 'next/image';

const Methodology = () => {
  const steps = [
    {
      number: '01',
      title: 'Discover & Discuss',
      description: 'We begin by deeply understanding your business, processes, and challenges.',
      whatWeDo: [
        'Stakeholder discussions & site assessment',
        'Workflow and infrastructure analysis',
        'Problem definition & success metrics'
      ],
      outcome: [
        'Clear problem statement and automation roadmap.'
      ]
    },
    {
      number: '02',
      title: 'Plan & Architect',
      description: 'We design a solution that works in real industrial environments.',
      whatWeDo: [
        'System architecture design (AI, robotics, hardware, software)',
        'Performance benchmarks & safety planning',
        'Deployment strategy & timelines'
      ],
      outcome: [
        'Production-ready solution blueprint.'
      ]
    },
    {
      number: '03',
      title: 'Build & Deploy',
      description: 'We engineer, integrate, and deploy with industrial-grade reliability.',
      whatWeDo: [
        'AI model development & training',
        'Robotics and hardware integration',
        'Software dashboards & system integration',
        'Testing in real operating conditions'
      ],
      outcome: [
        'Live system delivering measurable results.'
      ]
    },
    {
      number: '04',
      title: 'Operate, Optimize & Subscribe',
      description: 'We ensure long-term performance, improvement, and ROI.',
      whatWeDo: [
        'Continuous monitoring & optimization',
        'AI upgrades and feature enhancements',
        'Predictive maintenance & analytics',
        'Subscription-based support'
      ],
      outcome: [
        'A system that scales, improves, and evolves with your business.'
      ]
    }
  ];
  
  const CheckIcon = () => (
    <svg className="h-3 w-3 text-green-500 flex-shrink-0 mt-1 mr-2" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  
  interface StepNumberProps {
    number: string;
    isActive?: boolean;
    isLast?: boolean;
  }

  const StepNumber: React.FC<StepNumberProps> = ({ number, isActive = false, isLast = false }) => (
    <div className="flex items-center">
      <div className={`flex items-center justify-center w-8 h-8 rounded-full ${isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
        {number}
      </div>
      {!isLast && (
        <div className="w-16 h-0.5 bg-gray-200"></div>
      )}
    </div>
  );

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Our Methodology</h2>
          <p className="text-gray-600 dark:text-gray-400">
            From idea to impact — a structured path to industrial automation success.
          </p>
        </div>

        {/* Stepper */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center">
            {steps.map((step, index) => (
              <StepNumber 
                key={step.number}
                number={step.number}
                isActive={true}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 px-4">
          {steps.map((step, index) => (
            <div key={index} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{step.title}</h3>
              <p className='text-sm pb-5 text-gray-600 dark:text-gray-400'>{step.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">WHAT WE DO</h4>
                <ul className="space-y-2">
                  {step.whatWeDo.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">OUTCOME</h4>
                <ul className="space-y-2">
                  {step.outcome.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckIcon />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CASS Advantage */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/20 rounded-2xl p-10 border border-blue-100 dark:border-blue-900/30 shadow-inner">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">The CASS Advantage</h3>
            <p className="text-blue-600 dark:text-blue-400 text-xl font-medium mb-4">Plan once. Improve forever.</p>
            <p className="text-gray-600 dark:text-gray-400">
              We don't deliver one-time projects — we build living systems that grow smarter with time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
