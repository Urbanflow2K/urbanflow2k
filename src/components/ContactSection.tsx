
import { useState } from "react";
import { Phone, Mail, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import emailjs from "emailjs-com";

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
    
    // EmailJS configuration
    const serviceId = "service_35mqztq";
    const templateId = "template_bbc0zd8";
    const userId = "QnoJ45FZosLNqDGSZ"; // Updated EmailJS User ID
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      service: formData.service,
      message: formData.message,
      to_email: "flowurban2k@gmail.com", // Updated email address
      reply_to: formData.email, // This ensures you can directly reply to the sender
      user_email: formData.email // Adding explicit user_email for template variable
    };
    
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then(() => {
        toast({
          title: "Mensaje enviado",
          description: "Nos pondremos en contacto contigo pronto.",
          variant: "default",
        });
        
        // Send auto-reply to the client
        const autoReplyParams = {
          to_email: formData.email,
          to_name: formData.name,
          from_name: "Flow Urban",
          message: "Hemos recibido tu mensaje. Puedes contactarnos por Whatsapp para más información: 622 17 43 67",
          reply_to: "flowurban2k@gmail.com",
          user_email: formData.email // Adding explicit user_email for template variable
        };
        
        // Send the auto-reply email
        emailjs.send(serviceId, "template_autoreply", autoReplyParams, userId)
          .catch(error => {
            console.error("Error sending auto-reply:", error);
          });
        
        setFormData({
          name: "",
          email: "",
          service: "",
          message: ""
        });
      })
      .catch((error) => {
        console.error("Error al enviar el email:", error);
        toast({
          title: "Error al enviar",
          description: "Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  
  return (
    <section className="section relative" id="contacto" 
      style={{
        backgroundImage: 'url("/lovable-uploads/4376b5fe-449f-414f-bc9d-1d54d700a2c3.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative'
      }}>
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-urban-black/80 backdrop-blur-sm"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-urban-accent/5 blur-[120px] -z-10" />
      <div className="absolute bottom-1/3 left-20 w-72 h-72 rounded-full bg-blue-500/5 blur-[100px] -z-10" />
      
      <div className="relative z-10 text-center mb-16">
        <span className="inline-block px-4 py-2 rounded-full text-sm bg-urban-accent/10 text-urban-accent font-medium mb-4">
          Contacto
        </span>
        <h2 className="heading-lg">¿Listo para <span className="text-gradient">elevar tu música</span>?</h2>
        <p className="text-urban-light/80 max-w-2xl mx-auto mt-4 text-lg">
          Estamos aquí para ayudarte a llevar tu música al siguiente nivel. Cuéntanos tu proyecto.
        </p>
      </div>
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1">
          <div className="glass-card p-8 h-full">
            <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 mr-4">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm text-urban-light/70">WhatsApp</p>
                  <a href="https://wa.me/34622174367" className="text-lg hover:text-green-500 smooth-transition">
                    622 17 43 67
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="text-urban-accent mr-4" size={24} />
                <div>
                  <p className="text-sm text-urban-light/70">Email</p>
                  <a href="mailto:flowurban2k@gmail.com" className="text-lg hover:text-urban-accent smooth-transition">
                    flowurban2k@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-semibold mb-4">Horario de Atención</h4>
              <p className="text-urban-light/80">Lunes - Viernes: 9:00 - 20:00</p>
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
