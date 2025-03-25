
import React from 'react';
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <header className={cn("w-full py-4 px-6 md:px-8 flex items-center justify-between fixed top-0 left-0 right-0 z-50 glass-dark", className)}>
      <div className="flex items-center">
        <h1 className="text-xl font-medium font-heading gradient-text">WebCraft</h1>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#services" className="text-sm text-foreground/80 hover:text-foreground smooth-transition">
          Services
        </a>
        <a href="#process" className="text-sm text-foreground/80 hover:text-foreground smooth-transition">
          Processus
        </a>
        <a href="#quote" className="text-sm text-foreground/80 hover:text-foreground smooth-transition">
          Contact
        </a>
      </nav>
      <a 
        href="#quote" 
        className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover-scale"
      >
        Demander un devis
      </a>
    </header>
  );
};

export default Navbar;
