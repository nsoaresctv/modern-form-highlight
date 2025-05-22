import React from 'react';
import { ArrowRight, Monitor, Smartphone, Search } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="glass p-8 rounded-2xl flex flex-col gap-4 hover-scale group">
      <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center text-foreground">
        {icon}
      </div>
      <h3 className="text-xl font-semibold font-heading">{title}</h3>
      <p className="text-foreground/70 text-balance">{description}</p>
      <a 
        href="#quote" 
        className="mt-4 flex items-center text-foreground/70 group-hover:text-foreground smooth-transition"
      >
        <span className="text-sm font-medium">En savoir plus</span>
        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-sm text-foreground/70 mb-4">
            Nos services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading gradient-text">
            Des solutions web complètes pour votre entreprise
          </h2>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto text-balance">
            Nous proposons une gamme de services pour vous aider à établir et développer votre présence en ligne.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <ServiceCard 
              icon={<Monitor size={24} />}
              title="Sites Web Professionnels"
              description="Nous créons des sites web sur mesure qui reflètent l'identité de votre marque et répondent à vos objectifs commerciaux."
            />
          </div>
          
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <ServiceCard 
              icon={<Smartphone size={24} />}
              title="Design Responsive"
              description="Tous nos sites s'adaptent parfaitement à tous les appareils, offrant une expérience utilisateur optimale sur desktop, tablette et mobile."
            />
          </div>
          
          <div className="animate-slide-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <ServiceCard 
              icon={<Search size={24} />}
              title="Référencement SEO"
              description="Améliorez votre visibilité en ligne grâce à nos techniques d'optimisation pour les moteurs de recherche."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
