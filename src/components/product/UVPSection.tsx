interface UVP {
  title: string;
  subtitle: string;
  traditionalTitle: string;
  traditionalFeatures: string[];
  visionFlowTitle: string;
  features: string[];
  conclusion: {
    icon: string;
    text: string;
  };
}

interface UVPSectionProps {
  usp: UVP;
}

export default function UVPSection({ usp }: UVPSectionProps) {
  return (
    <section className="relative py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-white dark:from-orange-950/20 dark:via-amber-950/20 dark:to-gray-900">
      {/* Background overlay */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 20% 40%, rgba(245, 158, 11, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 60%, rgba(255, 107, 53, 0.15) 0%, transparent 50%)'
      }}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6" style={{color: 'var(--primary)', fontFamily: 'Syne, sans-serif'}}>
            {usp.title}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {usp.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 relative">
          {/* Traditional Systems Column */}
          <div className="glass-border border-red-500/30 p-12 rounded-3xl">
            <h3 className="text-2xl font-bold text-center mb-8 text-red-300" style={{fontFamily: 'Syne, sans-serif'}}>
              {usp.traditionalTitle}
            </h3>
            <div className="space-y-4">
              {usp.traditionalFeatures.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-red-500/10 hover:transform hover:translate-x-2 transition-all duration-300">
                  <span className="text-2xl text-red-400 font-bold">✗</span>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* VS Badge */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-2xl shadow-orange-500/50 border-5 border-gray-900 z-20 lg:block hidden">
            <span className="relative flex items-center justify-center w-full h-full">
              <span className="absolute inset-0 blur-xl bg-gradient-to-r from-orange-400 to-yellow-400 opacity-50 rounded-full"></span>
              <span className="relative z-10">VS</span>
            </span>
          </div>

          {/* VisionFlow Column */}
          <div className="glass-border border-orange-500/50 bg-orange-500/8 p-12 rounded-3xl">
            <h3 className="text-2xl font-bold text-center mb-8 text-yellow-300" style={{fontFamily: 'Syne, sans-serif'}}>
              {usp.visionFlowTitle}
            </h3>
            <div className="space-y-4">
              {usp.features.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-orange-500/10 hover:transform hover:translate-x-2 transition-all duration-300">
                  <span className="text-2xl text-yellow-400 font-bold">★</span>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile VS Badge */}
        <div className="lg:hidden flex justify-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-2xl shadow-orange-500/50 border-5 border-gray-900">
            <span className="relative flex items-center justify-center w-full h-full">
              <span className="absolute inset-0 blur-xl bg-gradient-to-r from-orange-400 to-yellow-400 opacity-50 rounded-full"></span>
              <span className="relative z-10">VS</span>
            </span>
          </div>
        </div>

        <div className="glass-border border-orange-500/30 bg-gradient-to-r from-orange-500/20 to-red-500/20 p-16 rounded-3xl text-center shadow-2xl shadow-orange-500/30">
          <div className="text-5xl mb-6">{usp.conclusion.icon}</div>
          <p className="text-2xl font-bold leading-relaxed" style={{fontFamily: 'Syne, sans-serif'}} dangerouslySetInnerHTML={{ __html: usp.conclusion.text }}></p>
        </div>
      </div>
    </section>
  );
}
