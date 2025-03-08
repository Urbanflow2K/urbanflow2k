
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
                Urban<span className="text-urban-accent">flow</span>
              </span>
            </Link>
            
            <p className="text-urban-light/70 mb-6">
              Transformamos tus ideas musicales en producciones profesionales que destacan en la industria.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-urban-gray flex items-center justify-center hover:bg-urban-accent smooth-transition">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-urban-gray flex items-center justify-center hover:bg-urban-accent smooth-transition">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-urban-gray flex items-center justify-center hover:bg-urban-accent smooth-transition">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
            </div>
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
                  <a href="mailto:flowurba2k@gmail.com" className="text-urban-light/70 hover:text-urban-accent smooth-transition">
                    flowurba2k@gmail.com
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
            © {currentYear} Urbanflow. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
