interface SolutionModules {
  title: string;
  subtitle: string;
  description: string;
  list: string[];
}

interface SolutionModulesSectionProps {
  solutionModules: SolutionModules;
}

export default function SolutionModulesSection({ solutionModules }: SolutionModulesSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-violet-50 to-white dark:from-purple-950/20 dark:via-violet-950/20 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6" style={{color: 'var(--primary)', fontFamily: 'Syne, sans-serif'}}>
            {solutionModules.title}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {solutionModules.subtitle}
          </p>
        </div>
        
        <p className="text-center text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 md:mb-16">
          {solutionModules.description}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {solutionModules.list.map((module, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border-l-5 border-blue-500 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 hover:border-cyan-400 hover:transform hover:translate-x-2 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 flex items-center gap-4 font-semibold text-lg" style={{color: 'var(--primary)', borderLeftWidth: '5px'}}>
              <span className="text-2xl text-blue-500 font-bold">▸</span>
              <span>{module}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
