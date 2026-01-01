import React from 'react';

const MissionAndVision = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">MISSION AND VISION</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Mission Card */}
          <div className="bg-blue-600 dark:bg-blue-800 text-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-[400px] flex flex-col">
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-6 text-center">MISSION</h3>
              <div className="flex-grow flex items-center">
                <p className="leading-relaxed text-lg text-justify">
                  To empower industries with state-of-the-art AI and robotic solutions that
                  drive innovation, efficiency, and growth. We aim to be the trusted
                  partner for companies seeking to revolutionize their operations
                  through advanced technology.
                </p>
              </div>
            </div>
          </div>
          
          {/* Vision Card */}
          <div className="bg-blue-700 dark:bg-blue-900 text-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-[400px] flex flex-col">
            <div className="flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-6 text-center">VISION</h3>
              <div className="flex-grow flex items-center">
                <p className="leading-relaxed text-lg text-justify">
                  To revolutionize the industrial landscape with innovative
                  AIOT solutions that enhance productivity, ensure precision,
                  and drive sustainable growth for a better tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
