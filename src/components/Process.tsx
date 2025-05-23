
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Nous discutons de vos besoins, objectifs et vision pour votre site web.',
    colorClass: 'glass-blue'
  },
  {
    number: '02',
    title: 'Proposition',
    description: 'Nous élaborons une proposition détaillée avec les fonctionnalités, le design et les délais.',
    colorClass: 'glass-purple'
  },
  {
    number: '03',
    title: 'Conception',
    description: 'Notre équipe crée un design sur mesure qui reflète l\'identité de votre marque.',
    colorClass: 'glass-teal'
  },
  {
    number: '04',
    title: 'Développement',
    description: 'Nous développons votre site avec les dernières technologies pour des performances optimales.',
    colorClass: 'glass-blue'
  },
  {
    number: '05',
    title: 'Lancement',
    description: 'Après les tests finaux, nous mettons votre site en ligne et assurons sa visibilité.',
    colorClass: 'glass-purple'
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 px-6 md:px-12 bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-accent text-white mb-4">
            Notre processus
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading gradient-text">
            Un processus simple et efficace
          </h2>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto text-balance">
            De la conception au lancement, nous suivons une méthodologie éprouvée pour garantir un projet réussi.
          </p>
        </div>
        
        <div className="relative">
          {/* Remplacer la ligne simple par un élément plus visuel */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-2 z-0">
            <div className="h-full w-full overflow-hidden">
              <div className="h-full w-full bg-gradient-to-b from-blue-400 via-purple-400 to-teal-400 opacity-20 rounded-full"></div>
            </div>
            {/* Points de connexion animés */}
            <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-400 opacity-30 animate-pulse"></div>
            <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-400 opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-teal-400 opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-400 opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
          
          {/* Version mobile: ligne verticale avec dégradé */}
          <div className="md:hidden absolute top-0 bottom-0 left-[28px] w-2 z-0">
            <div className="h-full w-full overflow-hidden">
              <div className="h-full w-full bg-gradient-to-b from-blue-400 via-purple-400 to-teal-400 opacity-20 rounded-full"></div>
            </div>
            {/* Points de connexion animés (version mobile) */}
            <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-blue-400 opacity-30 animate-pulse"></div>
            <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-purple-400 opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-teal-400 opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-blue-400 opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
          
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="animate-slide-up opacity-0"
                style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className={`flex-none z-10 w-14 h-14 rounded-full flex items-center justify-center ${step.colorClass} shadow-lg ${index % 2 === 0 ? 'md:mr-auto' : 'md:order-last'}`}>
                    <span className="text-lg font-bold">{step.number}</span>
                  </div>
                  
                  <div className={`md:w-1/2 p-6 rounded-2xl ${step.colorClass} ${index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto'}`}>
                    <h3 className="text-xl font-bold font-heading">{step.title}</h3>
                    <p className="mt-2 text-foreground/70">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
