interface FlowStep {
  step: string;
  description: string;
}

interface Flow {
  title: string;
  subtitle: string;
  icon: string;
  stepIcons: string[];
  conclusion: string;
  steps: FlowStep[];
}

interface HowItWorksSectionProps {
  flow: Flow;
}

export default function HowItWorksSection({ flow }: HowItWorksSectionProps) {
  return (
    <section className="relative py-24 overflow-hidden text-white" style={{background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'}}>
      {/* Background overlay */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 30% 30%, rgba(0, 217, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)'
      }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white" style={{fontFamily: 'Syne, sans-serif'}}>
            {flow.title}
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            {flow.subtitle}
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Steps 1-3 - Vertical Flow */}
          {flow.steps.slice(0, 3).map((item, index) => (
            <div key={index} className="relative">
              <div className="flex items-center justify-center">
                <div className="glass-border border-cyan-500/30 p-12 rounded-3xl hover:bg-white/15 hover:transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 cursor-pointer relative max-w-2xl w-full">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-cyan-500/50 border-4 border-gray-900">
                    {index + 1}
                  </div>
                  <div className="text-6xl mb-6 text-center">{flow.stepIcons[index]}</div>
                  <h3 className="text-2xl font-bold text-center mb-4" style={{fontFamily: 'Syne, sans-serif'}}>
                    {item.step}
                  </h3>
                  <p className="text-center text-white/80 text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
              
              {/* Arrow Down - Only show if not last step */}
              {index < 2 && (
                <div className="flex justify-center mt-8">
                  <div className="relative">
                    <svg className="w-16 h-16 animate-pulse-arrow" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id={`arrowGradient${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor: '#00D9FF', stopOpacity: 1}} />
                          <stop offset="100%" style={{stopColor: '#0099ff', stopOpacity: 1}} />
                        </linearGradient>
                      </defs>
                      <path d="M 50 10 L 50 70 M 50 70 L 35 55 M 50 70 L 65 55" 
                            stroke={`url(#arrowGradient${index})`} 
                            strokeWidth="4" 
                            fill="none" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                            filter="drop-shadow(0 0 10px rgba(0, 217, 255, 0.5))" />
                    </svg>
                    <div className="absolute inset-0 animate-pulse">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Steps 4-5 - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {flow.steps.slice(3, 5).map((item, index) => (
              <div key={index + 3} className="glass-border border-cyan-500/30 p-10 rounded-3xl hover:bg-white/15 hover:transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 cursor-pointer relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-cyan-500/50 border-4 border-gray-900">
                  {index + 4}
                </div>
                <div className="text-5xl mb-4 text-center">{flow.stepIcons[index + 3]}</div>
                <h3 className="text-xl font-bold text-center mb-3" style={{fontFamily: 'Syne, sans-serif'}}>
                  {item.step}
                </h3>
                <p className="text-center text-white/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="glass-border border-cyan-500/30 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-12 rounded-3xl text-center shadow-2xl shadow-cyan-500/30 mt-12">
          <p className="text-xl font-bold" style={{fontFamily: 'Syne, sans-serif'}}>
            {flow.conclusion}
          </p>
        </div>
      </div>
    </section>
  );
}
