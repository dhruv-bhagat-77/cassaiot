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
        <>
            <section className="dark:bg-darkmode pt-0">
                <div className="container">
                    <div className="text-center md:pb-20 pb-8">
                        <h2 className="pb-8 pt-5" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Built for Industrial Performance</h2>
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" className="text-SlateBlueText dark:text-opacity-80 text-lg font-normal max-w-920 m-auto">
                            Technology that improves quality, productivity, and ROI.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-stretch" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                        <div className="bg-primary lg:py-14 py-6 lg:px-16 px-8 lg:py-0 py-8 lg:rounded-l-22 rounded-t-22 md:rounded-tr-none md:rounded-bl-22 rounded-bl-none md:w-2/4 w-full">
                           <h6 className="text-[26px] leading-[2.1rem] font-bold text-center text-secondary dark:text-white pb-5">
                                Advantages
                            </h6>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {advantages.map((item) => (
                                <div 
                                  key={item.id}
                                  className="opacity-70 hover:opacity-100 transition-opacity duration-300 p-4 bg-white/10 rounded-lg"
                                >
                                  <h6 className="font-bold text-white">{item.title}</h6>
                                  <p className="text-sm font-normal text-justify text-white/80 mt-2">
                                    {item.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                        </div>
                        <div className="bg-ElectricAqua lg:py-14 py-6 lg:px-16 px-8 lg:rounded-r-22 rounded-b-22 md:rounded-bl-none md:rounded-tr-22 rounded-tr-none md:md:w-2/4 w-full">
                         <h6 className="text-[26px] leading-[2.1rem] font-bold text-center text-secondary dark:text-white pb-5">
                                Benefits
                            </h6>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {benefits.map((item) => (
                                <div 
                                  key={item.id}
                                  className="opacity-70 hover:opacity-100 transition-opacity duration-300 p-4 bg-white/10 rounded-lg"
                                >
                                  <h6 className="font-bold text-white">{item.title}</h6>
                                  <p className="text-sm font-normal text-justify text-white/80 mt-2">
                                    {item.description}
                                  </p>
                                </div>
                              ))}
                            </div>
                            {/* <div className="bg-white dark:bg-darklight rounded-22 lg:px-11 px-4 pt-8 pb-10">
                                <h6 className="text-[26px] leading-[2.1rem] font-bold text-secondary dark:text-white pb-5">
                                    Ticket Prices
                                </h6>
                                <div className="space-y-4">
                                    <div className="flex flex-wrap items-center md:gap-30 gap-2">
                                        <span className="text-[22px] leading-[2rem] font-bold text-secondary dark:text-white">
                                            $100
                                        </span>
                                        <p className="text-xl font-normal text-secondary dark:text-darktext">
                                            Early birds
                                        </p>
                                        <p className="text-sm font-normal text-SlateBlueText">
                                            Until May 20, 2022
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap items-center md:gap-30 gap-2">
                                        <span className="text-[22px] leading-[2rem] font-bold text-secondary dark:text-white">
                                            $150
                                        </span>
                                        <p className="text-xl font-normal text-secondary dark:text-darktext">
                                            Late birds
                                        </p>
                                        <p className="text-sm font-normal text-SlateBlueText">
                                            After May 20, 2022
                                        </p>
                                    </div>
                                    <Link
                                        href="/"
                                        className="btn btn-1 hover-filled-slide-down w-full text-center rounded-lg overflow-hidden"
                                    >
                                        <span>Book ticket</span>
                                    </Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventTicket;
