// CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  // Initialiser le panier depuis localStorage
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  // Sauvegarder le panier à chaque modification
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prev) => {
      const found = prev.find(i => i.produit_id === item.produit_id);
      if (found) {
        return prev.map(i =>
          i.produit_id === item.produit_id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (produit_id) => {
    setCart((prev) => prev.filter(i => i.produit_id !== produit_id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}