
import React, { useEffect, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import QuoteForm from '@/components/QuoteForm';
import Footer from '@/components/Footer';

const Index = () => {
  // Optimize scroll handler with useCallback to avoid recreation on each render
  const handleScroll = useCallback(() => {
    const animatedElements = document.querySelectorAll('.animate-slide-up, .animate-scale-in');
    const screenPosition = window.innerHeight / 1.2;
    
    // Use more efficient forEach loop
    animatedElements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      if (elementPosition < screenPosition) {
        // Set style directly instead of setAttribute for better performance
        (element as HTMLElement).style.animationDelay = '0.1s';
        (element as HTMLElement).style.animationFillMode = 'forwards';
      }
    });
  }, []);
  
  useEffect(() => {
    // Initial check on mount
    handleScroll();
    
    // Use passive:true for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
