interface Product {
  name: string;
  tagline: string;
  description: string;
  image: string;
}

interface Hero {
  title: string;
  tagline: string;
  description: string;
  buttons: Array<{
    text: string;
    style: string;
  }>;
}

interface HeroSectionProps {
  product: Product;
  hero: Hero;
}

export default function HeroSection({ product, hero }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white text-center py-20" style={{background: 'var(--gradient-hero)'}}>
      {/* Animated background overlay */}
      <div className="absolute inset-0 opacity-50 animate-pulse" style={{
        background: 'radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255, 107, 53, 0.15) 0%, transparent 50%)'
      }}></div>
      
      {/* Grid background */}
      <div className="hero-grid absolute inset-0 animate-grid-move"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-5 gradient-text animate-fadeInUp" style={{fontFamily: 'Syne, sans-serif'}}>
          {hero.title}
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          {hero.tagline}
        </p>
        <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-10 opacity-90 leading-relaxed animate-fadeInUp" style={{animationDelay: '0.4s'}}>
          {hero.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          {hero.buttons.map((button, index) => (
            <button 
              key={index}
              className={`relative overflow-hidden rounded-full font-bold text-lg transition-all duration-300 hover:transform hover:-translate-y-1 btn-shine ${
                button.style === 'primary' 
                  ? 'bg-white text-cyan-500 px-10 py-5' 
                  : 'bg-transparent text-white border-2 border-white/30 px-10 py-5 hover:bg-white hover:text-cyan-500'
              }`} 
              style={{fontFamily: 'Syne, sans-serif', boxShadow: '0 10px 40px rgba(0, 217, 255, 0.4)'}}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
