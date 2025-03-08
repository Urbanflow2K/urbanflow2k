
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Music2, Headphones, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Añadir un pequeño retraso para la animación
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const animationClasses = (delay: number) => 
    cn(
      "transition-all duration-1000 transform",
      isVisible 
        ? "opacity-100 translate-y-0" 
        : "opacity-0 translate-y-12",
      `delay-${delay}`
    );

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-urban-black to-urban-darkgray">
      {/* Partículas musicales animadas */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Music2 size={40} className="text-urban-accent/20" />
        </div>
        <div className="absolute top-2/3 left-3/4 animate-float delay-500">
          <Headphones size={32} className="text-urban-accent/20" />
        </div>
        <div className="absolute bottom-1/4 left-1/2 animate-float delay-1000">
          <PlayCircle size={24} className="text-urban-accent/20" />
        </div>
        {/* Círculos abstractos con blur */}
        <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-urban-accent/10 blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-[80px]" />
      </div>

      <div className="relative z-10 section flex flex-col items-center justify-center min-h-screen text-center">
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className={animationClasses(100)}>
            <span className="inline-block px-4 py-2 rounded-full text-sm bg-urban-accent/20 text-urban-accent font-medium mb-4">
              Producción Musical Profesional
            </span>
          </div>
          
          <h1 className={cn("heading-xl mb-6", animationClasses(200))}>
            Tu música, <span className="text-gradient">a otro nivel</span>
          </h1>
          
          <p className={cn("text-xl text-urban-light/90 max-w-2xl mx-auto", animationClasses(300))}>
            En Urbanflow transformamos tus ideas musicales en producciones profesionales. 
            Desde instrumentales personalizadas hasta presencia en Spotify.
          </p>
          
          <div className={cn("flex flex-wrap gap-4 justify-center mt-8", animationClasses(400))}>
            <Link to="/servicios" className="btn-primary">
              Ver Servicios
            </Link>
            <Link to="/contacto" className="btn-outline">
              Hablar con un productor
            </Link>
          </div>
          
          <div className={cn("mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8", animationClasses(500))}>
            <div className="glass-card p-6 hover:translate-y-[-5px] smooth-transition">
              <Music2 className="w-10 h-10 text-urban-accent mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Instrumentales Únicas</h3>
              <p className="text-urban-light/80">Creadas específicamente para tu estilo y visión artística</p>
            </div>
            
            <div className="glass-card p-6 hover:translate-y-[-5px] smooth-transition">
              <Headphones className="w-10 h-10 text-urban-accent mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Mezcla Profesional</h3>
              <p className="text-urban-light/80">Sonido claro, balanceado y competitivo para la industria</p>
            </div>
            
            <div className="glass-card p-6 hover:translate-y-[-5px] smooth-transition">
              <PlayCircle className="w-10 h-10 text-urban-accent mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Presencia Digital</h3>
              <p className="text-urban-light/80">Potencia tu música en plataformas como Spotify</p>
            </div>
          </div>
        </div>
      </div>

      {/* Elemento decorativo inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-urban-black to-transparent z-0" />
    </div>
  );
};

export default HeroSection;
