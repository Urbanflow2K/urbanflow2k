
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Music4, Headphones, Music3, Image, Video, PlayCircle, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: number;
  icon: JSX.Element;
}

interface ServiceCardProps {
  service: ServiceItem;
  isPopular?: boolean;
}

const ServiceCard = ({ service, isPopular = false }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const addToCart = () => {
    // Get current cart from localStorage
    const cart = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
    
    // Check if item is already in cart
    const existingItemIndex = cart.findIndex((item: ServiceItem) => item.id === service.id);
    
    if (existingItemIndex >= 0) {
      // Item already in cart, increment quantity
      cart[existingItemIndex].quantity = (cart[existingItemIndex].quantity || 1) + 1;
    } else {
      // Add new item to cart
      cart.push({
        ...service,
        quantity: 1
      });
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    
    // Dispatch a custom event to update cart count in navbar
    window.dispatchEvent(new Event('cartUpdated'));
    
    // Show success toast
    toast.success(`${service.title} añadido al carrito`);
  };
  
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
      
      <div className="mb-6 text-purple-400">{service.icon}</div>
      
      <h3 className="text-2xl font-bold mb-4 text-center">{service.title}</h3>
      
      <p className="text-urban-light/80 mb-6 h-24">{service.description}</p>
      
      <div className="flex items-baseline mb-6">
        <span className="text-3xl font-bold">{service.price}</span>
        <span className="text-urban-light/70 ml-1">EUR</span>
      </div>
      
      <div className="flex space-x-2">
        <Link 
          to="/contacto" 
          className={cn(
            "flex-1 text-center py-3 px-4 rounded-full smooth-transition",
            isHovered 
              ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white" 
              : "bg-transparent border border-purple-500 text-purple-400"
          )}
        >
          Comprar
        </Link>
        <Button
          onClick={addToCart}
          className="rounded-full bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white smooth-transition"
        >
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services: ServiceItem[] = [
    {
      id: "playlist15k",
      icon: <PlayCircle size={36} />,
      title: "Campaña Playlist 15K",
      description: "Inclusión en playlist con más de 15.000 seguidores para aumentar tu visibilidad y reproducciones en Spotify.",
      price: 15,
    },
    {
      id: "instrumental",
      icon: <Music4 size={36} />,
      title: "Instrumental",
      description: "Creamos beats y melodías únicas adaptadas a tu estilo. Dinos cómo lo quieres y lo hacemos realidad desde cero.",
      price: 100,
    },
    {
      id: "composicion",
      icon: <Music3 size={36} />,
      title: "Composición Musical",
      description: "Creación completa incluyendo arreglos, composición, letra y producción para una canción única y personalizada.",
      price: 150,
    },
    {
      id: "mezclaymaster",
      icon: <Headphones size={36} />,
      title: "Mezcla y Master",
      description: "Mezcla y master de voces según tu visión.",
      price: 100,
    },
    {
      id: "videoslyrics",
      icon: <Video size={36} />,
      title: "Videos Lyrics",
      description: "Visuales atractivos con tus letras sincronizadas a la música, perfectos para YouTube y aumentar el engagement.",
      price: 50,
    },
    {
      id: "portadaspotify",
      icon: <Image size={36} />,
      title: "Portada para Spotify",
      description: "Diseño de artwork personalizado con estética profesional para destacar tu música en todas las plataformas digitales.",
      price: 20,
    },
  ];

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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard 
            key={service.id}
            service={service}
            isPopular={index < 3}
          />
        ))}
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
