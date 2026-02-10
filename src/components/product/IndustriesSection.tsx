interface Industries {
  title: string;
  icon: string;
  list: string[];
}

interface IndustriesSectionProps {
  industries: Industries;
}

export default function IndustriesSection({ industries }: IndustriesSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-teal-50 via-cyan-50 to-white dark:from-teal-950/20 dark:via-cyan-950/20 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6" style={{color: 'var(--primary)', fontFamily: 'Syne, sans-serif'}}>
            {industries.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {industries.list.map((industry, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl text-center font-semibold text-lg border-2 border-gray-200 hover:border-cyan-400 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600"></div>
              <span className="relative z-10" style={{color: 'var(--primary)'}}>{industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
