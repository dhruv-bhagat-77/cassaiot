interface Integration {
  title: string;
  subtitle: string;
  icon: string;
  features: Array<{ icon: string; text: string }>;
  footer: string;
}

interface IntegrationSectionProps {
  integration: Integration;
}

export default function IntegrationSection({ integration }: IntegrationSectionProps) {
  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-50 to-white">
      {/* Background overlay */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 30% 30%, rgba(0, 217, 255, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)'
      }}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{color: 'var(--primary)', fontFamily: 'Syne, sans-serif'}}>
            {integration.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            {integration.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {integration.features.map((item, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl text-center shadow-lg hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 border-2 border-transparent hover:border-cyan-400">
              <div className="text-5xl mb-4">{item.icon}</div>
              <div className="font-semibold text-lg" style={{color: 'var(--primary)'}}>
                {item.text}
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-xl text-gray-600">
          {integration.footer}
        </p>
      </div>
    </section>
  );
}
