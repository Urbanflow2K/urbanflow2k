
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Music4, Headphones, Music3, Image, Video, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// PayPal product IDs mapping
const PAYPAL_PRODUCT_IDS = {
  "Campaña Playlist 15K": "MBRP3BPP2SJMS",
  "Instrumental": "MBRP3BPP2SJMS", // You'll need to replace with the actual product ID
  "Composición Musical": "MBRP3BPP2SJMS", // You'll need to replace with the actual product ID
  "Mezcla y Master": "MBRP3BPP2SJMS", // You'll need to replace with the actual product ID
  "Videos Lyrics": "MBRP3BPP2SJMS", // You'll need to replace with the actual product ID
  "Portada para Spotify": "MBRP3BPP2SJMS", // You'll need to replace with the actual product ID
};

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  price: string;
  isPopular?: boolean;
}

const ServiceCard = ({ icon, title, description, price, isPopular = false }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const productId = PAYPAL_PRODUCT_IDS[title as keyof typeof PAYPAL_PRODUCT_IDS] || "MBRP3BPP2SJMS";
  
  // Add PayPal cart button after component mounts
  useEffect(() => {
    // We need to make sure the cartPaypal object is available
    if (window.cartPaypal) {
      const buttonId = `add-to-cart-${title.replace(/\s+/g, '-').toLowerCase()}`;
      window.cartPaypal.AddToCart({ id: buttonId });
    }
  }, [title]);

  return (
    <div 
      className={cn(
        "glass-card p-8 relative overflow-hidden group",
        isPopular ? "border-purple-500/50" : "border-white/10",
        "smooth-transition hover:translate-y-[-10px]"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundImage: 'url("/lovable-uploads/4376b5fe-449f-414f-bc9d-1d54d700a2c3.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/60 backdrop-blur-sm -z-10"></div>
      
      {isPopular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-1 text-sm font-medium">
          Popular
        </div>
      )}
      
      <div className="mb-6 text-purple-400">{icon}</div>
      
      <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
      
      <p className="text-urban-light/80 mb-6 h-24">{description}</p>
      
      <div className="flex items-baseline mb-6">
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-urban-light/70 ml-1">EUR</span>
      </div>
      
      <div 
        className={cn(
          "w-full py-3 px-6 rounded-full smooth-transition flex items-center justify-center",
          isHovered 
            ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white" 
            : "bg-transparent border border-purple-500 text-purple-400"
        )}
      >
        <paypal-add-to-cart-button 
          data-id={`add-to-cart-${title.replace(/\s+/g, '-').toLowerCase()}`}
        ></paypal-add-to-cart-button>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  // Add View Cart button after component mounts
  useEffect(() => {
    // Make sure the cartPaypal object is available
    if (window.cartPaypal) {
      window.cartPaypal.Cart({ id: "pp-view-cart" });
    }
  }, []);

  return (
    <section className="section relative font-elegant" id="servicios">
      {/* Elemento decorativo */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 rounded-full bg-purple-500/5 blur-[100px] -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] -z-10" />
      
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-2 rounded-full text-sm bg-purple-500/10 text-purple-400 font-medium mb-4">
          Nuestros Servicios
        </span>
        <h2 className="heading-lg">Sonidos Exclusivos para tu Proyecto</h2>
      </div>
      
      {/* PayPal View Cart Button in a visible area */}
      <div className="flex justify-center mb-8">
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-1 rounded-full">
          <paypal-cart-button data-id="pp-view-cart"></paypal-cart-button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard 
          icon={<PlayCircle size={36} />}
          title="Campaña Playlist 15K"
          description="Inclusión en playlist con más de 15.000 seguidores para aumentar tu visibilidad y reproducciones en Spotify."
          price="15"
          isPopular={true}
        />
        
        <ServiceCard 
          icon={<Music4 size={36} />}
          title="Instrumental"
          description="Creamos beats y melodías únicas adaptadas a tu estilo. Dinos cómo lo quieres y lo hacemos realidad desde cero."
          price="100"
          isPopular={true}
        />
        
        <ServiceCard 
          icon={<Music3 size={36} />}
          title="Composición Musical"
          description="Creación completa incluyendo arreglos, composición, letra y producción para una canción única y personalizada."
          price="150"
          isPopular={true}
        />
        
        <ServiceCard 
          icon={<Headphones size={36} />}
          title="Mezcla y Master"
          description="Mezcla y master de voces según tu visión."
          price="100"
        />
        
        <ServiceCard 
          icon={<Video size={36} />}
          title="Videos Lyrics"
          description="Visuales atractivos con tus letras sincronizadas a la música, perfectos para YouTube y aumentar el engagement."
          price="50"
        />
        
        <ServiceCard 
          icon={<Image size={36} />}
          title="Portada para Spotify"
          description="Diseño de artwork personalizado con estética profesional para destacar tu música en todas las plataformas digitales."
          price="20"
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

// Add TypeScript declaration for window.cartPaypal
declare global {
  interface Window {
    cartPaypal: {
      AddToCart: (options: { id: string }) => void;
      Cart: (options: { id: string }) => void;
    };
  }
}

export default ServicesSection;
