
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import emailjs from 'emailjs-com';

const QuoteForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    project: '',
    message: ''
  });
  const { toast } = useToast();
  
  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }, []);
  
  const handleSubmit = React.useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        to_email: 'hello@citinov.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        project_type: formData.project,
        message: formData.message,
      };
      
      // Send email using EmailJS
      await emailjs.send(
        'service_id',  // Replace with your EmailJS service ID
        'template_id', // Replace with your EmailJS template ID
        templateParams,
        'user_id'      // Replace with your EmailJS user ID
      );
      
      // Show success toast
      toast({
        title: "Demande envoyée",
        description: "Nous vous contacterons bientôt avec votre devis.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        project: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, toast]);
  
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
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input-shine border-blue-200 focus:border-blue-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input-shine border-blue-200 focus:border-blue-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+33 6 12 34 56 78"
                    required
                    value={formData.phone}
                    onChange={handleChange}
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
                    value={formData.company}
                    onChange={handleChange}
                    className="input-shine border-blue-200 focus:border-blue-400"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="project" className="text-sm font-medium">
                  Type de projet <span className="text-red-500">*</span>
                </label>
                <select
                  id="project"
                  name="project"
                  required
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-blue-200 bg-background focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-200"
                >
                  <option value="" disabled>Sélectionnez une option</option>
                  <option value="site-vitrine">Site vitrine</option>
                  <option value="e-commerce">Site e-commerce</option>
                  <option value="refonte">Refonte de site</option>
                  <option value="autre">Autre (précisez)</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Description du projet <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre projet, vos objectifs et vos besoins..."
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="resize-none input-shine border-blue-200 focus:border-blue-400"
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
