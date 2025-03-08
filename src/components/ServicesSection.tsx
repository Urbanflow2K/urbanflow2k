
import { useState } from "react";
import { Link } from "react-router-dom";
import { Music4, Headphones, Music3, Image, Video, PlayCircle, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  price: string;
  isPopular?: boolean;
}

const ServiceCard = ({ icon, title, description, price, isPopular = false }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "glass-card p-8 relative overflow-hidden group",
        isPopular ? "border-urban-accent/50" : "border-white/10",
        "smooth-transition hover:translate-y-[-10px]"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-urban-accent text-white px-4 py-1 text-sm font-medium">
          Popular
        </div>
      )}
      
      <div className="mb-6 text-urban-accent">{icon}</div>
      
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      
      <p className="text-urban-light/80 mb-6 h-24">{description}</p>
      
      <div className="flex items-baseline mb-6">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-urban-light/70 ml-1">EUR</span>
      </div>
      
      <Link 
        to="/contacto" 
        className={cn(
          "block text-center py-3 px-6 rounded-full smooth-transition",
          isHovered 
            ? "bg-urban-accent text-white" 
            : "bg-transparent border border-urban-accent text-urban-accent"
        )}
      >
        Comprar
      </Link>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="section relative" id="servicios">
      {/* Elemento decorativo */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-urban-accent/5 blur-[100px] -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] -z-10" />
      
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 rounded-full text-sm bg-urban-accent/10 text-urban-accent font-medium mb-4">
          Nuestros Servicios
        </span>
        <h2 className="heading-lg">Soluciones musicales <span className="text-gradient">profesionales</span></h2>
        <p className="text-urban-light/80 max-w-2xl mx-auto mt-4 text-lg">
          Ofrecemos servicios completos de producción musical para elevar tu presencia artística
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard 
          icon={<Music4 size={48} />}
          title="Instrumental Personalizada"
          description="Creamos beats y melodías únicas adaptadas a tu estilo. Producción completa desde cero con revisiones incluidas."
          price="100"
          isPopular={true}
        />
        
        <ServiceCard 
          icon={<Headphones size={48} />}
          title="Mezcla y Master"
          description="Procesamiento profesional de tus pistas para un sonido limpio, balanceado y listo para las plataformas digitales."
          price="100"
        />
        
        <ServiceCard 
          icon={<Music3 size={48} />}
          title="Composición Musical"
          description="Creación completa incluyendo arreglos, composición, letra y producción para una canción única y personalizada."
          price="150"
          isPopular={true}
        />
        
        <ServiceCard 
          icon={<Image size={48} />}
          title="Portada para Spotify"
          description="Diseño de artwork personalizado con estética profesional para destacar tu música en todas las plataformas digitales."
          price="20"
        />
        
        <ServiceCard 
          icon={<Video size={48} />}
          title="Videos Lyrics"
          description="Visuales atractivos con tus letras sincronizadas a la música, perfectos para YouTube y aumentar el engagement."
          price="50"
        />
        
        <ServiceCard 
          icon={<PlayCircle size={48} />}
          title="Incluye tu tema en nuestra playlist"
          description="Inclusión en playlist con más de 1000 seguidores para aumentar tu visibilidad y reproducciones en Spotify."
          price="5"
          isPopular={true}
        />
      </div>
      
      <div className="mt-16 text-center">
        <p className="text-urban-light/80 mb-6">¿Necesitas un servicio personalizado? Contáctanos</p>
        <Link to="/contacto" className="btn-primary">
          Consulta Gratuita
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;
