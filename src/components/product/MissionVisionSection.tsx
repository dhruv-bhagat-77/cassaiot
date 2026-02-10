interface Mission {
  title: string;
  subtitle: string;
  mission: string;
  vision: string;
}

interface MissionVisionSectionProps {
  mission: Mission;
}

export default function MissionVisionSection({ mission }: MissionVisionSectionProps) {
  return (
    <section className="relative py-24 overflow-hidden text-white" style={{background: 'var(--gradient-hero)'}}>
      {/* Background overlay */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 20% 30%, rgba(0, 217, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)'
      }}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          {/* <div className="text-5xl mb-5">{mission.icon}</div> */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white" style={{fontFamily: 'Syne, sans-serif'}}>
            {mission.title}
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            {mission.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass p-16 rounded-3xl hover:bg-white/12 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{color: 'var(--accent)', fontFamily: 'Syne, sans-serif'}}>
              {mission.mission}
            </h3>
            <p className="text-xl leading-relaxed opacity-95">
              {mission.mission}
            </p>
          </div>
          <div className="glass p-16 rounded-3xl hover:bg-white/12 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{color: 'var(--accent)', fontFamily: 'Syne, sans-serif'}}>
              {mission.vision}
            </h3>
            <p className="text-xl leading-relaxed opacity-95">
              {mission.vision}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
