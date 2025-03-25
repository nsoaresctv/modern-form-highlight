
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-foreground/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-xl font-medium font-heading gradient-text">WebCraft</h2>
            <p className="mt-4 text-foreground/70 max-w-md">
              Nous créons des sites web professionnels qui aident les entreprises à se démarquer et à atteindre leurs objectifs.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground smooth-transition">
                  Sites Web
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground smooth-transition">
                  E-commerce
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground smooth-transition">
                  SEO
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground smooth-transition">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-foreground/70">
                contact@webcraft.fr
              </li>
              <li className="text-foreground/70">
                +33 1 23 45 67 89
              </li>
              <li className="text-foreground/70">
                Paris, France
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            &copy; {currentYear} WebCraft. Tous droits réservés.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-foreground/60 hover:text-foreground smooth-transition">
              Mentions légales
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground smooth-transition">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
