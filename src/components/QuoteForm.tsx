
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const QuoteForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Demande envoyée",
        description: "Nous vous contacterons bientôt avec votre devis.",
        duration: 5000,
      });
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };
  
  return (
    <section id="quote" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-indigo-50 pointer-events-none" />
      
      <div className="absolute top-1/4 -right-20 w-64 h-64 rounded-full bg-blue-300/20 blur-3xl" />
      <div className="absolute bottom-1/3 -left-20 w-80 h-80 rounded-full bg-purple-300/20 blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-slide-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-primary text-white mb-4">
              Demande de devis
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading gradient-text">
              Prêt à lancer votre projet web ?
            </h2>
            <p className="mt-4 text-foreground/70 max-w-2xl mx-auto text-balance">
              Complétez le formulaire ci-dessous et nous vous contacterons dans les 24 heures avec un devis personnalisé.
            </p>
          </div>
          
          <div className="glass rounded-2xl p-8 md:p-10 shadow-xl animate-scale-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="input-shine border-blue-200 focus:border-blue-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="input-shine border-blue-200 focus:border-blue-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+33 6 12 34 56 78"
                    className="input-shine border-blue-200 focus:border-blue-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Société
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Votre entreprise"
                    className="input-shine border-blue-200 focus:border-blue-400"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="project" className="text-sm font-medium">
                  Type de projet
                </label>
                <select
                  id="project"
                  name="project"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-blue-200 bg-background focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                >
                  <option value="" disabled selected>Sélectionnez une option</option>
                  <option value="site-vitrine">Site vitrine</option>
                  <option value="e-commerce">Site e-commerce</option>
                  <option value="refonte">Refonte de site</option>
                  <option value="autre">Autre (précisez)</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Description du projet
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre projet, vos objectifs et vos besoins..."
                  rows={5}
                  className="resize-none input-shine border-blue-200 focus:border-blue-400"
                  required
                />
              </div>
              
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full py-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover-scale transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Demander mon devis gratuitement'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
