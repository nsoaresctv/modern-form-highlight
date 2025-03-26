
import React from 'react';
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

// Pre-optimize class strings to avoid runtime concatenation
const navLinkClass = "text-sm text-foreground/80 hover:text-foreground smooth-transition";
const ctaButtonClass = "px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover-scale";

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <header className={cn("w-full py-4 px-6 md:px-8 fixed top-0 left-0 right-0 z-50 glass-dark flex items-center justify-between", className)}>
      <div className="flex items-center">
        <h1 className="text-xl font-medium font-heading gradient-text">CitinovStudio</h1>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#services" className={navLinkClass}>Services</a>
        <a href="#process" className={navLinkClass}>Processus</a>
        <a href="#quote" className={navLinkClass}>Contact</a>
      </nav>
      <a href="#quote" className={ctaButtonClass}>Demander un devis</a>
    </header>
  );
};

export default Navbar;
