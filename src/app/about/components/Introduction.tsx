import React from 'react';

const Introduction = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12 transition-colors duration-300">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white text-center mb-6">INTRODUCTION TO CASS</h2>
          <div className="prose max-w-none dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              At CASS AIOT, we build intelligent machines and software that transform how industries operate.
              We are an industrial AI and robotics company focused on solving real-world manufacturing, inspection, and
              automation problems—where precision, reliability, and scale truly matter. Our systems combine computer
              vision, robotics, AI-driven decision-making, and industrial-grade hardware into fully integrated, productionready solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
             CASS AIOT was founded with a single belief:<br className="dark:text-gray-400"/>
            automation should be autonomous, intelligent, and outcome-driven—not manual, fragmented, or dependent on
            human intervention.
            From fully automatic robotic systems to AI-powered inspection, inventory, and control platforms, our
            technology is designed to operate in harsh industrial environments, scale across factories, and continuously
            improve through self-learning pipelines.<br className="dark:text-gray-400"/>
            We don't build demos.<br className="dark:text-gray-400"/>
            We build deployable machines, scalable software, and defensible deep-tech IP.<br className="dark:text-gray-400"/>
            Today, CASS AIOT is working with manufacturers and industrial partners to redefine efficiency, accuracy, and
            consistency—while laying the foundation for the next generation of AI-native factories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
