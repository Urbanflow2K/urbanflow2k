
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronRight } from "lucide-react";

const Servicios = () => {
  return (
    <div className="bg-urban-black text-urban-white min-h-screen font-elegant">
      <Navbar />
      
      {/* Header de Página */}
      <div 
        className="pt-32 pb-20 px-4 relative"
        style={{
          backgroundImage: 'url("/lovable-uploads/4376b5fe-449f-414f-bc9d-1d54d700a2c3.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/60 backdrop-blur-sm"></div>
        
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-urban-accent/5 blur-[100px] -z-10" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block px-4 py-2 rounded-full text-sm bg-urban-accent/10 text-urban-accent font-medium mb-4">
              Nuestros Servicios
            </span>
            <h1 className="heading-lg mb-6">
              Nuestros servicios
            </h1>
          </ScrollReveal>
          
          <div className="flex items-center justify-center text-urban-light/60 mt-8">
            <a href="/" className="hover:text-urban-accent smooth-transition">Inicio</a>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-urban-accent">Servicios</span>
          </div>
        </div>
      </div>
      
      <ServicesSection />
      
      {/* Sección de cómo trabajamos */}
      <section className="section bg-urban-darkgray relative overflow-hidden font-elegant">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-urban-accent/5 blur-[120px] -z-10" />
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full text-sm bg-urban-accent/10 text-urban-accent font-medium mb-4">
              Nuestro Proceso
            </span>
            <h2 className="heading-lg">Cómo <span className="text-gradient">trabajamos</span></h2>
            <p className="text-urban-light/80 max-w-2xl mx-auto mt-4 text-lg">
              Un enfoque meticuloso para crear producciones musicales de alta calidad
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <ScrollReveal delay={100}>
            <div className="glass-card p-8 text-center relative hover:translate-y-[-5px] smooth-transition">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-urban-accent flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-4">Consulta Inicial</h3>
              <p className="text-urban-light/80">Analizamos tus necesidades y objetivos para entender tu visión musical</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="glass-card p-8 text-center relative hover:translate-y-[-5px] smooth-transition">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-urban-accent flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-4">Propuesta Creativa</h3>
              <p className="text-urban-light/80">Desarrollamos un concepto musical basado en tus preferencias</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <div className="glass-card p-8 text-center relative hover:translate-y-[-5px] smooth-transition">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-urban-accent flex items-center justify-center text-white font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-4">Producción</h3>
              <p className="text-urban-light/80">Creamos tu proyecto con equipos de alta calidad y técnicas profesionales</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <div className="glass-card p-8 text-center relative hover:translate-y-[-5px] smooth-transition">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-urban-accent flex items-center justify-center text-white font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-4">Entrega Final</h3>
              <p className="text-urban-light/80">Recibes archivos de alta calidad listos para su uso profesional</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Servicios;
