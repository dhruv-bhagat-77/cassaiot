import React from 'react';

const MissionAndVision = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 mb-16">MISSION AND VISION</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Mission Card */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-800 text-white rounded-2xl p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-[400px] flex flex-col border border-blue-500/20 dark:border-blue-600/30 backdrop-blur-sm">
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
          <div className="bg-gradient-to-br from-cyan-600 to-blue-600 dark:from-cyan-900 dark:to-blue-800 text-white rounded-2xl p-8 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-[400px] flex flex-col border border-cyan-500/20 dark:border-cyan-600/30 backdrop-blur-sm">
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
