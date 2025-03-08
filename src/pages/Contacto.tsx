
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronRight } from "lucide-react";

const Contacto = () => {
  return (
    <div className="bg-urban-black text-urban-white min-h-screen">
      <Navbar />
      
      {/* Header de Página */}
      <div className="pt-32 pb-20 px-4 bg-gradient-to-b from-urban-black to-urban-darkgray relative">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-urban-accent/5 blur-[100px] -z-10" />
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-2 rounded-full text-sm bg-urban-accent/10 text-urban-accent font-medium mb-4">
              Contacto
            </span>
            <h1 className="heading-lg mb-6">
              Conversemos sobre <span className="text-gradient">tu música</span>
            </h1>
            <p className="text-xl text-urban-light/80 max-w-2xl mx-auto">
              Estamos listos para ayudarte a llevar tu sonido al siguiente nivel
            </p>
          </ScrollReveal>
          
          <div className="flex items-center justify-center text-urban-light/60 mt-8">
            <a href="/" className="hover:text-urban-accent smooth-transition">Inicio</a>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-urban-accent">Contacto</span>
          </div>
        </div>
      </div>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contacto;
