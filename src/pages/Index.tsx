
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import QuoteForm from '@/components/QuoteForm';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Function to handle scroll animations
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-slide-up, .animate-scale-in');
      
      animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
          element.setAttribute('style', `animation-delay: 0.1s; animation-fill-mode: forwards;`);
        }
      });
    };
    
    // Initial check for elements in viewport
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
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
