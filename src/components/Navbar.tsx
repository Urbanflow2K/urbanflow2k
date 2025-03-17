
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Music, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Detectar cuando el usuario hace scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update cart count when localStorage changes
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
      setCartCount(cart.length);
    };

    // Initial count
    updateCartCount();

    // Listen for storage events to update cart count
    window.addEventListener('storage', updateCartCount);
    
    // Custom event for when we update cart from within the app
    window.addEventListener('cartUpdated', updateCartCount);
    
    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        isScrolled ? "glass-nav py-3" : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 smooth-transition hover:scale-105 font-elegant"
          >
            <Music className="h-8 w-8 text-urban-accent" />
            <span className="text-2xl font-bold tracking-tight text-urban-white">
              Urban<span className="text-urban-accent">Flow2k</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-elegant">
            <Link to="/" className="nav-link text-urban-white opacity-90 hover:opacity-100 font-medium smooth-transition">
              Inicio
            </Link>
            <Link to="/servicios" className="nav-link text-urban-white opacity-90 hover:opacity-100 font-medium smooth-transition">
              Servicios
            </Link>
            <Link to="/sobre-nosotros" className="nav-link text-urban-white opacity-90 hover:opacity-100 font-medium smooth-transition">
              Sobre Nosotros
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/contacto" className="btn-primary">
                Contactar
              </Link>
              <Link to="/carrito" className="relative p-2 text-urban-white hover:text-urban-accent smooth-transition">
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-urban-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/carrito" className="relative p-2 text-urban-white hover:text-urban-accent smooth-transition">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-urban-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              className="text-white hover:text-urban-accent smooth-transition p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-card m-4 animate-scaleIn font-elegant">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-4 rounded-md text-base font-medium text-center text-urban-white hover:bg-urban-gray smooth-transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/servicios"
              className="block px-3 py-4 rounded-md text-base font-medium text-center text-urban-white hover:bg-urban-gray smooth-transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              to="/sobre-nosotros"
              className="block px-3 py-4 rounded-md text-base font-medium text-center text-urban-white hover:bg-urban-gray smooth-transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nosotros
            </Link>
            <Link
              to="/contacto"
              className="block px-3 py-4 rounded-md text-base font-medium text-center bg-urban-accent text-white hover:bg-opacity-90 smooth-transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contactar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
