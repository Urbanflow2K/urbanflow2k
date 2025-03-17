
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Trash, CreditCard, Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

const Carrito = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('shoppingCart') || '[]');
    setCartItems(cart);
  }, []);

  const updateCart = (updatedCart: CartItem[]) => {
    setCartItems(updatedCart);
    localStorage.setItem('shoppingCart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const removeItem = (id: string) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    updateCart(updatedCart);
    toast.success("Producto eliminado del carrito");
  };

  const updateQuantity = (id: string, change: number) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    updateCart(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    // In a real implementation, this would redirect to a payment processor
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast.info("En una implementación real, esto te llevaría a la pasarela de pago con tarjeta bancaria");
    }, 1500);
  };

  return (
    <div className="bg-urban-black text-urban-white min-h-screen">
      <Navbar />
      
      <div className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="heading-lg mb-10 text-center">Tu Carrito</h1>
        
        {cartItems.length === 0 ? (
          <div className="glass-card p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
            <p className="text-urban-light/80 mb-6">
              Añade algunos productos desde nuestra sección de servicios.
            </p>
            <Link to="/servicios" className="btn-primary">
              Ver Servicios
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {cartItems.map((item) => (
                <div key={item.id} className="glass-card p-6 mb-4 flex flex-col sm:flex-row items-center justify-between">
                  <div className="flex-1 mb-4 sm:mb-0 text-center sm:text-left">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-urban-accent font-bold">{item.price} EUR</p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full h-8 w-8"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <Minus size={16} />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full h-8 w-8"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus size={16} />
                      </Button>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-red-500 hover:text-red-400 hover:bg-red-500/10"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash size={20} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Resumen del Pedido</h3>
              
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between mb-4">
                  <span>{item.title} (x{item.quantity})</span>
                  <span>{(item.price * item.quantity).toFixed(2)} EUR</span>
                </div>
              ))}
              
              <div className="border-t border-white/10 pt-4 mt-6">
                <div className="flex justify-between font-bold text-xl">
                  <span>Total:</span>
                  <span>{calculateTotal().toFixed(2)} EUR</span>
                </div>
              </div>
              
              <Button 
                className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90"
                onClick={handleCheckout}
                disabled={isLoading}
              >
                <CreditCard className="mr-2" />
                {isLoading ? "Procesando..." : "Pagar con Tarjeta"}
              </Button>
              
              <p className="text-xs text-center text-urban-light/60 mt-4">
                Pago seguro y encriptado. En un sitio real, esta funcionalidad se conectaría a Stripe, PayPal u otro procesador de pagos.
              </p>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Carrito;
