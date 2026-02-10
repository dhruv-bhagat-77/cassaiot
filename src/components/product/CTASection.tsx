interface CTA {
  title: string;
  description: string;
  buttons: Array<{
    text: string;
    style: string;
  }>;
}

interface CTASectionProps {
  cta: CTA;
}

export default function CTASection({ cta }: CTASectionProps) {
  return (
    <section className="relative py-32 overflow-hidden text-white" style={{background: 'linear-gradient(135deg, var(--accent-warm) 0%, #ff8c42 100%)'}}>
      {/* Background overlay */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)'
      }}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8" style={{fontFamily: 'Syne, sans-serif'}}>
          {cta.title}
        </h2>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed">
          {cta.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {cta.buttons.map((button, index) => (
            <button 
              key={index}
              className={`relative overflow-hidden rounded-full font-bold text-lg transition-all duration-300 hover:transform hover:-translate-y-1 btn-shine ${
                button.style === 'primary' 
                  ? 'bg-white text-orange-500 px-12 py-6' 
                  : 'bg-transparent text-white border-2 border-white/30 px-12 py-6 hover:bg-white hover:text-orange-500'
              }`} 
              style={{fontFamily: 'Syne, sans-serif', boxShadow: '0 10px 40px rgba(255,255,255,0.3)'}}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
