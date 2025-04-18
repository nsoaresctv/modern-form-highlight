
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-20 pb-10 overflow-hidden grid-background">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.01] to-primary/[0.05] pointer-events-none" />
      
      {/* Optimized background elements - using fewer CSS properties */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-blue-200/10 blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-purple-200/10 blur-3xl" />
      
      <div className="relative flex flex-col items-center text-center max-w-3xl mx-auto space-y-8 animate-fade-in">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-sm text-foreground/70 mb-2">
          Création de sites web professionnels
        </div>
        
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100/50 border border-green-200 text-green-700 text-sm font-medium mb-4">
          Site web vitrine à partir de 599€ HT livré en 72h seulement !
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-tight text-balance">
          <span className="gradient-text">Transformez votre vision</span> en une présence web remarquable
        </h1>
        
        <p className="text-foreground/70 text-lg max-w-2xl text-balance">
          Nous créons des sites web élégants, performants et parfaitement adaptés à vos besoins pour vous aider à vous démarquer en ligne et à développer votre activité.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <a 
            href="#quote" 
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-white font-medium hover-scale transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Demander un devis
          </a>
          <a 
            href="#services" 
            className="px-6 py-3 rounded-full bg-foreground/5 border border-foreground/10 text-foreground font-medium hover-scale flex items-center justify-center gap-2"
          >
            En savoir plus
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 w-full flex justify-center animate-float">
        <a href="#services" className="flex flex-col items-center gap-2 text-foreground/50 hover:text-foreground smooth-transition">
          <span className="text-sm">Découvrir</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
