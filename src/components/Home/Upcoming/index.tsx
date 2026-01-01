import React from "react";
import { conferences } from "../../../app/api/data";
import {
  Factory,
  Fuel,
  Plane,
  CheckCircle2,
  Diamond
} from 'lucide-react';

const IndustryWeServe = () => {
  return (
    <>
      <section className="upcoming dark:bg-darkmode">
        <div className="max-w-1068 m-auto">
          <div className="container">
            <h2 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" className="text-center pb-10">Industries We Serve</h2>
             <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" className="text-SlateBlueText text-center dark:text-opacity-80 text-lg font-normal max-w-920 m-auto">
                  We build AI-powered automation, robotics, and real-time intelligence systems tailored for mission-critical industries where accuracy,uptime, and scalability matter. 
              </p>
            <div>
              <div>
                <div className="flex items-center flex-wrap w-full border border-solid  dark:border-dark_border md:px-14 px-6 md:mt-14 mt-6 rounded-22">
                  {conferences.map((conference, index) => (
                    <div
                      key={`conference-${index}`}
                      data-aos="fade-up" 
                      data-aos-delay={`${index*300}`} 
                      data-aos-duration="1000"
                      className="flex flex-col md:flex-row gap-6 w-full md:py-8 py-5 border-b border-solid dark:border-dark_border last:border-b-0"
                    >
                      <div className="md:w-1/4">
                        <div className="flex items-center gap-3 mb-2">
                          {conference.icon === 'Factory' && <Factory size={32} className="w-8 h-8 text-primary" />}
                          {conference.icon === 'Fuel' && <Fuel size={32} className="w-8 h-8 text-primary" />}
                          {conference.icon === 'Plane' && <Plane size={32} className="w-8 h-8 text-primary" />}
                          {conference.icon === 'Utensils' && <Diamond size={32} className="w-8 h-8 text-primary" />}
                          <h6 className="text-xl font-bold text-secondary dark:text-white">
                            {conference.title}
                          </h6>
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                          {conference.items.map((item, itemIndex) => (
                            <li key={`${conference.title}-${itemIndex}`} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                              <span className="text-base">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustryWeServe;
