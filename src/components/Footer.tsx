
import { Link } from "react-router-dom";
import { Music, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-urban-black border-t border-white/10 font-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Music className="h-8 w-8 text-urban-accent" />
              <span className="text-2xl font-bold tracking-tight text-urban-white">
                Urban<span className="text-urban-accent">Flow2k</span>
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
            <h3 className="text-lg font-semibold text-urban-white mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-green-600 mr-3">
                    <Phone className="text-white" size={14} />
                  </div>
                  <a href="https://wa.me/34622174367" className="text-urban-light/70 hover:text-green-500 smooth-transition">
                    WhatsApp: 622 17 43 67
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
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-urban-light/60">
            © {currentYear} UrbanFlow2k. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
