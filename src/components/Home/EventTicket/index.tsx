import React from "react";
import Link from "next/link";
import Image from "next/image";

interface AdvantageItem {
  id: string;
  title: string;
  description: string;
}

interface BenefitItem {
  id: string;
  title: string;
  description: string;
}

const advantages: AdvantageItem[] = [
  {
    id: 'advantage-1',
    title: '⚙️ Plug-and-Play Integration',
    description: 'Works with SAP, legacy software, PLCs, CNCs, and MES systems.'
  },
  {
    id: 'advantage-2',
    title: '📊 Single Unified Dashboard',
    description: 'All data, reports, and insights in one standardized view.'
  },
  {
    id: 'advantage-3',
    title: '🧩 Fully Customizable Reports',
    description: 'Tailored formats for production, quality, and billing.'
  },
  {
    id: 'advantage-4',
    title: '🛂 Role-Based Admin Panel',
    description: 'Granular permissions with full operational control.'
  },
  {
    id: 'advantage-5',
    title: '👥 Multi-User Access',
    description: 'Secure logins for operators, managers, and auditors.'
  },
  {
    id: 'advantage-6',
    title: '🔗 Industrial Protocol Support',
    description: 'RS-485, Modbus TCP/IP, NC code integration.'
  },
  {
    id: 'advantage-7',
    title: '📡 Intranet-Ready Deployment',
    description: 'Runs securely inside your factory network.'
  },
  {
    id: 'advantage-8',
    title: '📈 Scalable Architecture',
    description: 'From one machine to multi-plant deployments.'
  },
  {
    id: 'advantage-9',
    title: '🛠️ Enterprise Support',
    description: 'Deployment, monitoring, and long-term maintenance.'
  }
];

const benefits: BenefitItem[] = [
  { 
    id: 'benefit-1',
    title: '🤖 Automated Inspections', 
    description: 'Eliminates manual checking and human dependency.' 
  },
  {
    id: 'benefit-2',
    title: '⏱️ Real-Time Production Visibility', 
    description: 'Live tracking of output, rejection ratios, and trends.' 
  },
  {
    id: 'benefit-3',
    title: '❌ Automatic Rejection Handling', 
    description: 'Instant action on defects—no delays, no misses.' 
  },
  {
    id: 'benefit-4',
    title: '🎯 Consistent Quality Control', 
    description: 'Same standards, every shift, every day.' 
  },
  {
    id: 'benefit-5',
    title: '🚀 Higher Productivity', 
    description: 'Faster cycles with fewer stoppages.' 
  },
  {
    id: 'benefit-6',
    title: '💰 Lower Inspection Cost', 
    description: 'Reduced manpower and rework expenses.' 
  },
  {
    id: 'benefit-7',
    title: '📉 Fewer Errors & Disputes', 
    description: 'Complete traceability for audits and vendor billing.' 
  },
  {
    id: 'benefit-8',
    title: '🏆 Stronger Brand Reputation', 
    description: 'Deliver consistent quality to your customers.' 
  }
];

const EventTicket = () => {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                        Built for Industrial Performance
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Technology that improves quality, productivity, and ROI.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                    {/* Advantages Section */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                        <div className="flex items-center justify-center mb-8">
                            <div className="bg-blue-500/20 p-3 rounded-full">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                            </div>
                            <h3 className="ml-4 text-2xl font-bold text-white">Advantages</h3>
                        </div>
                        <div className="space-y-4">
                            {advantages.map((item) => (
                                <div 
                                    key={item.id}
                                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-white/20"
                                >
                                    <div className="flex items-start">
                                        <span className="text-xl mr-3 mt-0.5">{item.title.split(' ')[0]}</span>
                                        <div>
                                            <h4 className="font-semibold text-white">{item.title.split(' ').slice(1).join(' ')}</h4>
                                            <p className="text-sm text-blue-100 mt-1">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                        <div className="flex items-center justify-center mb-8">
                            <div className="bg-cyan-400/20 p-3 rounded-full">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                            <h3 className="ml-4 text-2xl font-bold text-white">Benefits</h3>
                        </div>
                        <div className="space-y-4">
                            {benefits.map((item) => (
                                <div 
                                    key={item.id}
                                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 transition-all duration-300 hover:bg-white/20"
                                >
                                    <div className="flex items-start">
                                        <span className="text-xl mr-3 mt-0.5">{item.title.split(' ')[0]}</span>
                                        <div>
                                            <h4 className="font-semibold text-white">{item.title.split(' ').slice(1).join(' ')}</h4>
                                            <p className="text-sm text-cyan-100 mt-1">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventTicket;
