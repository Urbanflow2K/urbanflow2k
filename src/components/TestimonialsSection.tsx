
import { useState, useEffect, useRef } from "react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlos Ruiz",
    role: "Artista Independiente",
    content: "La instrumental que me crearon en Urbanflow superó todas mis expectativas. El sonido es increíblemente profesional y capturaron exactamente el estilo que buscaba."
  },
  {
    id: 2,
    name: "Laura Méndez",
    role: "Cantautora",
    content: "El servicio de mezcla y masterización transformó completamente mi canción. Ahora suena a nivel de las grandes producciones y he recibido muchísimos comentarios positivos."
  },
  {
    id: 3,
    name: "Miguel Ángel",
    role: "Productor Musical",
    content: "Las portadas para Spotify que diseñaron conectan perfectamente con mi música. El arte visual complementa la esencia de mis canciones y destaca en las plataformas."
  },
  {
    id: 4,
    name: "Sara Blanco",
    role: "Rapera Emergente",
    content: "Gracias a la inclusión en su playlist, mis reproducciones aumentaron considerablemente. Es una forma efectiva de llegar a nuevos oyentes que aprecian mi estilo."
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<number | null>(null);
  
  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = window.setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);
  };
  
  useEffect(() => {
    startAutoplay();
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);
  
  const handleDotClick = (index: number) => {
    if (index === activeIndex) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
      startAutoplay(); // Restart autoplay after manual navigation
    }, 300);
  };
  
  return (
    <section className="section bg-urban-darkgray py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full text-sm bg-urban-accent/10 text-urban-accent font-medium mb-4">
            Testimonios
          </span>
          <h2 className="heading-lg">Lo que dicen nuestros <span className="text-gradient">clientes</span></h2>
        </div>
        
        <div className="relative">
          <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 text-urban-accent/10">
            <Quote size={120} />
          </div>
          
          <div 
            className={cn(
              "glass-card p-10 sm:p-14 relative max-w-3xl mx-auto text-center",
              isAnimating ? "opacity-0" : "opacity-100",
              "transition-opacity duration-300"
            )}
          >
            <p className="text-xl sm:text-2xl font-light italic mb-8 text-urban-light">
              {testimonials[activeIndex].content}
            </p>
            
            <div>
              <p className="text-xl font-semibold text-urban-white">{testimonials[activeIndex].name}</p>
              <p className="text-urban-light/70">{testimonials[activeIndex].role}</p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex 
                    ? "bg-urban-accent w-8" 
                    : "bg-urban-light/20 hover:bg-urban-light/40"
                )}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
