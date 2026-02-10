interface WhereUsed {
  title: string;
  icon: string;
  list: string[];
  footer: string;
}

interface WhereUsedSectionProps {
  whereUsed: WhereUsed;
}

export default function WhereUsedSection({ whereUsed }: WhereUsedSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-white dark:from-green-950/20 dark:via-emerald-950/20 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6" style={{color: 'var(--primary)', fontFamily: 'Syne, sans-serif'}}>
            {whereUsed.title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {whereUsed.list.map((location, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg flex items-center gap-4 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
              <div className="text-3xl">🏭</div>
              <span className="font-semibold text-lg" style={{color: 'var(--primary)'}}>{location}</span>
            </div>
          ))}
        </div>
        
        <p className="text-center text-xl font-bold text-blue-600">
          {whereUsed.footer}
        </p>
      </div>
    </section>
  );
}
