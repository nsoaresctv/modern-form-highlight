
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-20 pb-10 overflow-hidden grid-background">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.01] to-primary/[0.05] pointer-events-none" />
      
      {/* Optimized background elements - using fewer CSS properties */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-blue-200/10 blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-purple-200/10 blur-3xl" />
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left max-w-3xl mx-auto space-y-8 animate-fade-in order-2 lg:order-1">
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
        
        <div className="hidden lg:flex items-center justify-center order-1 lg:order-2 animate-float">
          <div className="relative w-full max-w-lg">
            {/* Animation wrapper */}
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Animated circles in background */}
              <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-blue-400/10 animate-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-1/3 left-1/3 w-24 h-24 rounded-full bg-purple-400/10 animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-2/3 right-1/3 w-20 h-20 rounded-full bg-teal-400/10 animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>
            
            {/* SVG illustration - Web design vector graphic */}
            <svg 
              viewBox="0 0 500 500" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-full h-auto drop-shadow-lg"
            >
              {/* Computer/Website Design Illustration */}
              <rect x="100" y="120" width="300" height="200" rx="8" fill="#3b82f6" opacity="0.9" />
              <rect x="110" y="130" width="280" height="150" rx="4" fill="#f8fafc" />
              
              {/* Website Components */}
              <rect x="130" y="145" width="100" height="20" rx="2" fill="#64748b" opacity="0.7" />
              <rect x="130" y="175" width="240" height="10" rx="2" fill="#94a3b8" opacity="0.5" />
              <rect x="130" y="195" width="180" height="10" rx="2" fill="#94a3b8" opacity="0.5" />
              <rect x="130" y="215" width="210" height="10" rx="2" fill="#94a3b8" opacity="0.5" />
              <rect x="130" y="245" width="80" height="25" rx="12.5" fill="#3b82f6" />
              
              {/* Stand */}
              <path d="M250,320 L220,370 L280,370 Z" fill="#64748b" />
              <rect x="200" y="370" width="100" height="10" rx="2" fill="#64748b" />
              
              {/* Animated elements - pulsing dots */}
              <circle cx="370" y="145" r="5" fill="#10b981">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="390" y="145" r="5" fill="#ef4444">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="0.6s" />
              </circle>
              <circle cx="410" y="145" r="5" fill="#f59e0b">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" begin="1.2s" />
              </circle>
            </svg>
          </div>
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
