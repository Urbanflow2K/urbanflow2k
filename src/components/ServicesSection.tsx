
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Music4, Headphones, Music3, Image, Video, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  price: string;
  isPopular?: boolean;
  isPlaylistCampaign?: boolean;
  isInstrumental?: boolean;
  isMixMaster?: boolean;
  isComposition?: boolean;
  isVideoLyrics?: boolean;
  isSpotifyCover?: boolean;
}

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  price, 
  isPopular = false, 
  isPlaylistCampaign = false,
  isInstrumental = false,
  isMixMaster = false,
  isComposition = false,
  isVideoLyrics = false,
  isSpotifyCover = false
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
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
      
      {isPlaylistCampaign || isInstrumental || isMixMaster || isComposition || isVideoLyrics || isSpotifyCover ? (
        <Popover>
          <PopoverTrigger asChild>
            <button 
              className={cn(
                "w-full text-center py-3 px-6 rounded-full smooth-transition",
                isHovered 
                  ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white" 
                  : "bg-transparent border border-purple-500 text-purple-400"
              )}
            >
              Comprar
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-black/95 border border-purple-500/30 backdrop-blur-md">
            <div className="p-4">
              <h4 className="text-lg font-bold mb-2 text-purple-400">Opciones de pago</h4>
              
              {isPlaylistCampaign && (
                <>
                  <style dangerouslySetInnerHTML={{ __html: `.pp-3FL6A79J6SN72{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;}` }} />
                  <form action="https://www.paypal.com/ncp/payment/3FL6A79J6SN72" method="post" target="_blank" style={{ display: 'inline-grid', justifyItems: 'center', alignContent: 'start', gap: '0.5rem', width: '100%' }}>
                    <input className="pp-3FL6A79J6SN72" type="submit" value="Pagar ahora" />
                    <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
                    <section style={{ fontSize: '0.8rem' }}> Tecnología de <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style={{ height: '0.875rem', verticalAlign: 'middle' }}/></section>
                  </form>
                </>
              )}

              {(isInstrumental || isMixMaster) && (
                <>
                  <style dangerouslySetInnerHTML={{ __html: `.pp-Q5N5NUSNU69AU{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;}` }} />
                  <form action="https://www.paypal.com/ncp/payment/Q5N5NUSNU69AU" method="post" target="_blank" style={{ display: 'inline-grid', justifyItems: 'center', alignContent: 'start', gap: '0.5rem', width: '100%' }}>
                    <input className="pp-Q5N5NUSNU69AU" type="submit" value="Pagar ahora" />
                    <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
                    <section style={{ fontSize: '0.8rem' }}> Tecnología de <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style={{ height: '0.875rem', verticalAlign: 'middle' }}/></section>
                  </form>
                </>
              )}
              
              {isComposition && (
                <>
                  <style dangerouslySetInnerHTML={{ __html: `.pp-GJBKDUZ9WHCT2{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;}` }} />
                  <form action="https://www.paypal.com/ncp/payment/GJBKDUZ9WHCT2" method="post" target="_blank" style={{ display: 'inline-grid', justifyItems: 'center', alignContent: 'start', gap: '0.5rem', width: '100%' }}>
                    <input className="pp-GJBKDUZ9WHCT2" type="submit" value="Pagar ahora" />
                    <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
                    <section style={{ fontSize: '0.8rem' }}> Tecnología de <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style={{ height: '0.875rem', verticalAlign: 'middle' }}/></section>
                  </form>
                </>
              )}
              
              {isVideoLyrics && (
                <>
                  <style dangerouslySetInnerHTML={{ __html: `.pp-S9EGMJ5KDDYHW{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;}` }} />
                  <form action="https://www.paypal.com/ncp/payment/S9EGMJ5KDDYHW" method="post" target="_blank" style={{ display: 'inline-grid', justifyItems: 'center', alignContent: 'start', gap: '0.5rem', width: '100%' }}>
                    <input className="pp-S9EGMJ5KDDYHW" type="submit" value="Pagar ahora" />
                    <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
                    <section style={{ fontSize: '0.8rem' }}> Tecnología de <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style={{ height: '0.875rem', verticalAlign: 'middle' }}/></section>
                  </form>
                </>
              )}
              
              {isSpotifyCover && (
                <>
                  <style dangerouslySetInnerHTML={{ __html: `.pp-CX6UJRMQATL26{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;}` }} />
                  <form action="https://www.paypal.com/ncp/payment/CX6UJRMQATL26" method="post" target="_blank" style={{ display: 'inline-grid', justifyItems: 'center', alignContent: 'start', gap: '0.5rem', width: '100%' }}>
                    <input className="pp-CX6UJRMQATL26" type="submit" value="Pagar ahora" />
                    <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
                    <section style={{ fontSize: '0.8rem' }}> Tecnología de <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" style={{ height: '0.875rem', verticalAlign: 'middle' }}/></section>
                  </form>
                </>
              )}
              
              <div className="mt-2 text-center">
                <Link 
                  to="/contacto" 
                  className="text-sm text-purple-400 hover:text-purple-300 smooth-transition"
                >
                  Contactar para más información
                </Link>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      ) : (
        <Link 
          to="/contacto" 
          className={cn(
            "block text-center py-3 px-6 rounded-full smooth-transition",
            isHovered 
              ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white" 
              : "bg-transparent border border-purple-500 text-purple-400"
          )}
        >
          Comprar
        </Link>
      )}
    </div>
  );
};

const ServicesSection = () => {
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
        <ServiceCard 
          icon={<PlayCircle size={36} />}
          title="Campaña Playlist 15K"
          description="Inclusión en playlist con más de 15.000 seguidores para aumentar tu visibilidad y reproducciones en Spotify."
          price="15"
          isPopular={true}
          isPlaylistCampaign={true}
        />
        
        <ServiceCard 
          icon={<Music4 size={36} />}
          title="Instrumental"
          description="Creamos beats y melodías únicas adaptadas a tu estilo. Dinos cómo lo quieres y lo hacemos realidad desde cero."
          price="100"
          isPopular={true}
          isInstrumental={true}
        />
        
        <ServiceCard 
          icon={<Music3 size={36} />}
          title="Composición Musical"
          description="Creación completa incluyendo arreglos, composición, letra y producción para una canción única y personalizada."
          price="150"
          isPopular={true}
          isComposition={true}
        />
        
        <ServiceCard 
          icon={<Headphones size={36} />}
          title="Mezcla y Master"
          description="Mezcla y master de voces según tu visión."
          price="100"
          isMixMaster={true}
        />
        
        <ServiceCard 
          icon={<Video size={36} />}
          title="Videos Lyrics"
          description="Visuales atractivos con tus letras sincronizadas a la música, perfectos para YouTube y aumentar el engagement."
          price="50"
          isVideoLyrics={true}
        />
        
        <ServiceCard 
          icon={<Image size={36} />}
          title="Portada para Spotify"
          description="Diseño de artwork personalizado con estética profesional para destacar tu música en todas las plataformas digitales."
          price="20"
          isSpotifyCover={true}
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
