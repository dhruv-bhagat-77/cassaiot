interface Dashboard {
  title: string;
  subtitle: string;
  icon: string;
  features: Array<{ icon: string; text: string }>;
  footer: string;
}

interface DashboardSectionProps {
  dashboard: Dashboard;
}

export default function DashboardSection({ dashboard }: DashboardSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-white dark:from-slate-950/20 dark:via-gray-950/20 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6" style={{color: 'var(--primary)', fontFamily: 'Syne, sans-serif'}}>
            {dashboard.title}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {dashboard.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16">
          {dashboard.features.map((item, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl text-center shadow-lg hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 border-2 border-transparent hover:border-cyan-400">
              <div className="text-5xl mb-4">{item.icon}</div>
              <div className="font-semibold text-lg" style={{color: 'var(--primary)'}}>
                {item.text}
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-xl font-bold text-blue-600">
          {dashboard.footer}
        </p>
      </div>
    </section>
  );
}
