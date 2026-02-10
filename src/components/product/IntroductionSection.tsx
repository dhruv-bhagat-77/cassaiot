interface Introduction {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  resultTitle: string;
  resultItems: string[];
}

interface IntroductionSectionProps {
  introduction: Introduction;
}

export default function IntroductionSection({ introduction }: IntroductionSectionProps) {
  const technologyIcons = ['📹', '🤖', '📊', '🔄'];

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-white dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-gray-900">
      {/* Background overlay */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)'
      }}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{color: 'var(--primary)', fontFamily: 'Syne, sans-serif'}}>
            {introduction.title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            {introduction.subtitle}
          </p>
        </div>
        
        <p className="text-center text-xl text-gray-600 mb-16 leading-relaxed" dangerouslySetInnerHTML={{ __html: introduction.description }}></p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {introduction.technologies.map((tech, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl text-center shadow-lg hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 border-2 border-transparent hover:border-cyan-400">
              <div className="text-5xl mb-5">
                {technologyIcons[index] || '�'}
              </div>
              <div className="font-bold text-lg" style={{color: 'var(--primary)', fontFamily: 'Syne, sans-serif'}}>
                {tech}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-green-100 to-green-200 p-16 rounded-3xl shadow-2xl shadow-green-500/20">
          <h3 className="text-2xl font-bold text-green-900 text-center mb-8">{introduction.resultTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {introduction.resultItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-green-500/40">
                  ✓
                </div>
                <span className="text-green-900 font-semibold text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
