
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ScrollReveal from "@/components/ScrollReveal";
import { ChevronRight, Music2, Headphones, Award, Users } from "lucide-react";

const SobreNosotros = () => {
  return (
    <div className="bg-urban-black text-urban-white min-h-screen">
      <Navbar />
      
      {/* Header de Página */}
      <div className="pt-32 pb-20 px-4 bg-gradient-to-b from-urban-black to-urban-darkgray relative">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-urban-accent/5 blur-[100px] -z-10" />
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-2 rounded-full text-sm bg-urban-accent/10 text-urban-accent font-medium mb-4">
              Sobre Nosotros
            </span>
            <h1 className="heading-lg mb-6">
              Conoce a <span className="text-gradient">Urbanflow</span>
            </h1>
            <p className="text-xl text-urban-light/80 max-w-2xl mx-auto">
              Expertos en producción musical con pasión por elevar talentos emergentes
            </p>
          </ScrollReveal>
          
          <div className="flex items-center justify-center text-urban-light/60 mt-8">
            <a href="/" className="hover:text-urban-accent smooth-transition">Inicio</a>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-urban-accent">Sobre Nosotros</span>
          </div>
        </div>
      </div>
      
      {/* Sección Historia */}
      <section className="section relative">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-urban-accent/5 blur-[120px] -z-10" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden h-[500px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-urban-accent/20 to-blue-500/20 mix-blend-overlay z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                alt="Estudio de música" 
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 rounded-full text-sm bg-urban-accent/10 text-urban-accent font-medium">
                Nuestra Historia
              </span>
              <h2 className="heading-lg">De la pasión a la <span className="text-gradient">excelencia</span></h2>
              <p className="text-lg text-urban-light/80">
                Urbanflow nació de la pasión por la música urbana y la producción musical de calidad. Lo que comenzó como un pequeño proyecto en un estudio casero ha evolucionado hasta convertirse en un referente en la producción musical profesional.
              </p>
              <p className="text-lg text-urban-light/80">
                Nuestra misión es democratizar el acceso a producciones musicales de alta calidad, permitiendo que artistas emergentes compitan al mismo nivel que grandes nombres de la industria.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-urban-accent">100+</span>
                  <span className="text-urban-light/70">Proyectos Completados</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-urban-accent">50+</span>
                  <span className="text-urban-light/70">Artistas Satisfechos</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-urban-accent">5+</span>
                  <span className="text-urban-light/70">Años de Experiencia</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-urban-accent">20+</span>
                  <span className="text-urban-light/70">Éxitos Producidos</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Sección Valores */}
      <section className="section bg-urban-darkgray relative">
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] -z-10" />
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full text-sm bg-urban-accent/10 text-urban-accent font-medium mb-4">
              Nuestros Valores
            </span>
            <h2 className="heading-lg">Los pilares de <span className="text-gradient">Urbanflow</span></h2>
            <p className="text-urban-light/80 max-w-2xl mx-auto mt-4 text-lg">
              Principios que guían nuestro trabajo y compromiso con cada cliente
            </p>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ScrollReveal delay={100}>
            <div className="glass-card p-8 text-center hover:translate-y-[-5px] smooth-transition">
              <div className="w-16 h-16 rounded-full bg-urban-accent/10 flex items-center justify-center mx-auto mb-6">
                <Music2 size={28} className="text-urban-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Calidad Musical</h3>
              <p className="text-urban-light/80">Compromiso inquebrantable con la excelencia en cada producción</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="glass-card p-8 text-center hover:translate-y-[-5px] smooth-transition">
              <div className="w-16 h-16 rounded-full bg-urban-accent/10 flex items-center justify-center mx-auto mb-6">
                <Users size={28} className="text-urban-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Servicio Personalizado</h3>
              <p className="text-urban-light/80">Cada proyecto es único y recibe atención individualizada</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <div className="glass-card p-8 text-center hover:translate-y-[-5px] smooth-transition">
              <div className="w-16 h-16 rounded-full bg-urban-accent/10 flex items-center justify-center mx-auto mb-6">
                <Headphones size={28} className="text-urban-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovación Constante</h3>
              <p className="text-urban-light/80">Siempre a la vanguardia de tendencias y tecnologías musicales</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <div className="glass-card p-8 text-center hover:translate-y-[-5px] smooth-transition">
              <div className="w-16 h-16 rounded-full bg-urban-accent/10 flex items-center justify-center mx-auto mb-6">
                <Award size={28} className="text-urban-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Integridad</h3>
              <p className="text-urban-light/80">Honestidad y transparencia en cada etapa del proceso creativo</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default SobreNosotros;
