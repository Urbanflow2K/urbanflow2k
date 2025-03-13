
import { Link } from "react-router-dom";
import { Music, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-urban-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Music className="h-8 w-8 text-urban-accent" />
              <span className="text-2xl font-bold tracking-tight text-urban-white">
                Urban<span className="text-urban-accent">Flow2K</span>
              </span>
            </Link>
            
            <p className="text-urban-light/70 mb-6">
              Transformamos tus ideas musicales en producciones profesionales que destacan en la industria.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-urban-white mb-6">Servicios</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/servicios" className="text-urban-light/70 hover:text-urban-accent smooth-transition">
                  Instrumental Personalizada
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-urban-light/70 hover:text-urban-accent smooth-transition">
                  Mezcla y Master
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-urban-light/70 hover:text-urban-accent smooth-transition">
                  Composición Musical
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-urban-light/70 hover:text-urban-accent smooth-transition">
                  Portada para Spotify
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-urban-light/70 hover:text-urban-accent smooth-transition">
                  Videos Lyrics
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-urban-light/70 hover:text-urban-accent smooth-transition">
                  Promoción en Playlist
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-urban-white mb-6">Enlaces</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-urban-light/70 hover:text-urban-accent smooth-transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-urban-light/70 hover:text-urban-accent smooth-transition">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="text-urban-light/70 hover:text-urban-accent smooth-transition">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-urban-light/70 hover:text-urban-accent smooth-transition">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidad" className="text-urban-light/70 hover:text-urban-accent smooth-transition">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/terminos-y-condiciones" className="text-urban-light/70 hover:text-urban-accent smooth-transition">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-urban-white mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-center">
                  <Phone className="text-urban-accent mr-3" size={18} />
                  <a href="tel:622174367" className="text-urban-light/70 hover:text-urban-accent smooth-transition">
                    622 17 43 67
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <Mail className="text-urban-accent mr-3" size={18} />
                  <a href="mailto:flowurban2k@gmail.com" className="text-urban-light/70 hover:text-urban-accent smooth-transition">
                    flowurban2k@gmail.com
                  </a>
                </div>
              </li>
            </ul>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-urban-white mb-4">Newsletter</h3>
              <p className="text-urban-light/70 mb-4">Suscríbete para recibir novedades y ofertas especiales</p>
              
              <form className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-2 bg-urban-gray border border-urban-gray rounded-l-lg focus:ring-2 focus:ring-urban-accent focus:border-transparent smooth-transition"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-urban-accent text-white rounded-r-lg hover:bg-opacity-90 smooth-transition"
                >
                  <Mail size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-urban-light/60">
            © {currentYear} UrbanFlow2K. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
