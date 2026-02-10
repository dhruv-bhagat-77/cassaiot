interface WhyCassAIOT {
  title: string;
  icon: string;
  list: string[];
  conclusion: {
    icon: string;
    text: string;
  };
}

interface WhyCassSectionProps {
  whyCassAIOT: WhyCassAIOT;
}

export default function WhyCassSection({ whyCassAIOT }: WhyCassSectionProps) {
  return (
    <section className="relative py-24 overflow-hidden text-white" style={{background: 'linear-gradient(135deg, var(--primary) 0%, #1e293b 100%)'}}>
      {/* Background overlay */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 25% 35%, rgba(0, 217, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 65%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)'
      }}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white" style={{fontFamily: 'Syne, sans-serif'}}>
            {whyCassAIOT.title}
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto mb-16">
          {whyCassAIOT.list.map((reason, index) => (
            <div key={index} className="glass p-8 mb-6 rounded-2xl border-l-5 border-green-500 flex items-center gap-6 hover:bg-white/12 hover:transform hover:translate-x-4 transition-all duration-300" style={{borderLeftWidth: '5px'}}>
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-green-500/40">
                ✓
              </div>
              <span className="text-xl font-semibold">{reason}</span>
            </div>
          ))}
        </div>
        
        <div className="glass p-16 rounded-3xl text-center border border-white/20">
          <div className="text-5xl mb-6">{whyCassAIOT.conclusion.icon}</div>
          <p className="text-2xl font-bold leading-relaxed" style={{fontFamily: 'Syne, sans-serif'}} dangerouslySetInnerHTML={{ __html: whyCassAIOT.conclusion.text }}></p>
        </div>
      </div>
    </section>
  );
}
