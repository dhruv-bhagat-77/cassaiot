interface Problem {
  title: string;
  subtitle: string;
  description: string;
  issues: string[];
  conclusion: string;
}

interface ProblemSectionProps {
  problem: Problem;
}

export default function ProblemSection({ problem }: ProblemSectionProps) {
  return (
    <section className="relative py-24 bg-gradient-to-br from-red-50 via-pink-50 to-white dark:from-red-950/20 dark:via-pink-950/20 dark:to-gray-900">
      {/* Background overlay */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 10% 20%, rgba(239, 68, 68, 0.08) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)'
      }}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6" style={{color: 'var(--primary)'}}>
            {problem.title}
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {problem.subtitle}
          </p>
        </div>
        
        <p className="text-center text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 md:mb-12" dangerouslySetInnerHTML={{ __html: problem.description }}></p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-12 md:mb-16">
          {problem.issues.map((issue, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 border border-red-100 hover:border-red-300">
              <p className="text-gray-700 font-medium leading-relaxed">{issue}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-red-100 to-red-200 p-12 rounded-3xl text-center shadow-2xl shadow-red-500/20">
          <p className="text-2xl font-bold text-red-800">
            {problem.conclusion}
          </p>
        </div>
      </div>
    </section>
  );
}
