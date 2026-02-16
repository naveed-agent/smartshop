'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

// Product type define karo
type Product = {
  currentPrice: any;
  id: number;
  name: string;
  description: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  quantity?: number;
};

type CartContextType = {
  cart: Product[];
  cartItems: Product[]; // 👈 sirf ye add kiya
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Local storage se cart load karo
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Cart update honey par local storage mein save karo
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Total items aur price calculate karo
    const items = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    const price = cart.reduce((acc, item) => {
      const priceNum = parseInt(item.currentPrice?.replace(/[^0-9]/g, '') || '0');
      return acc + (priceNum * (item.quantity || 1));
    }, 0);
    
    setTotalItems(items);
    setTotalPrice(price);
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      
      if (existingProduct) {
        // Product already exists, quantity badhao
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        // Naya product add karo
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    alert(`${product.name} added to cart!`);
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{
      cart,
      cartItems: cart, // 👈 sirf ye add kiya
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
