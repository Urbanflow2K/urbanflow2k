
import { useState } from "react";
import { Phone, Mail, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    setTimeout(() => {
      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo pronto.",
        variant: "default",
      });
      
      setFormData({
        name: "",
        email: "",
        service: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section className="section relative" id="contacto">
      {/* Elementos decorativos */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-urban-accent/5 blur-[120px] -z-10" />
      <div className="absolute bottom-1/3 left-20 w-72 h-72 rounded-full bg-blue-500/5 blur-[100px] -z-10" />
      
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 rounded-full text-sm bg-urban-accent/10 text-urban-accent font-medium mb-4">
          Contacto
        </span>
        <h2 className="heading-lg">¿Listo para <span className="text-gradient">elevar tu música</span>?</h2>
        <p className="text-urban-light/80 max-w-2xl mx-auto mt-4 text-lg">
          Estamos aquí para ayudarte a llevar tu música al siguiente nivel. Cuéntanos tu proyecto.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1">
          <div className="glass-card p-8 h-full">
            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="text-urban-accent mr-4" size={24} />
                <div>
                  <p className="text-sm text-urban-light/70">Teléfono</p>
                  <a href="tel:622174367" className="text-lg hover:text-urban-accent smooth-transition">
                    622 17 43 67
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="text-urban-accent mr-4" size={24} />
                <div>
                  <p className="text-sm text-urban-light/70">Email</p>
                  <a href="mailto:flowurba2k@gmail.com" className="text-lg hover:text-urban-accent smooth-transition">
                    flowurba2k@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-4">Horario de Atención</h4>
              <p className="text-urban-light/80 mb-2">Lunes - Viernes: 9:00 - 20:00</p>
              <p className="text-urban-light/80">Fines de semana: 10:00 - 18:00</p>
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-urban-gray flex items-center justify-center hover:bg-urban-accent smooth-transition">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-urban-gray flex items-center justify-center hover:bg-urban-accent smooth-transition">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-urban-gray flex items-center justify-center hover:bg-urban-accent smooth-transition">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-urban-light/90 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-urban-gray/50 border border-urban-gray rounded-lg focus:ring-2 focus:ring-urban-accent focus:border-transparent smooth-transition"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-urban-light/90 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-urban-gray/50 border border-urban-gray rounded-lg focus:ring-2 focus:ring-urban-accent focus:border-transparent smooth-transition"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-urban-light/90 mb-2">
                  Servicio de Interés
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-urban-gray/50 border border-urban-gray rounded-lg focus:ring-2 focus:ring-urban-accent focus:border-transparent smooth-transition"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="instrumental">Instrumental Personalizada</option>
                  <option value="mezcla">Mezcla y Master</option>
                  <option value="composicion">Composición Musical</option>
                  <option value="portada">Portada para Spotify</option>
                  <option value="video">Video Lyrics</option>
                  <option value="playlist">Promoción en Playlist</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-urban-light/90 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-urban-gray/50 border border-urban-gray rounded-lg focus:ring-2 focus:ring-urban-accent focus:border-transparent smooth-transition"
                  placeholder="Describe tu proyecto y cómo podemos ayudarte..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "btn-primary w-full flex items-center justify-center",
                  isSubmitting ? "opacity-80" : ""
                )}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje <Send size={18} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
