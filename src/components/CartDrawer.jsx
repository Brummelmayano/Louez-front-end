import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer({ open, onClose }) {
  const { cart, clearCart, setCart } = useCart();
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  // Réinitialise la sélection à l'ouverture du panier
  useEffect(() => {
    if (open) {
      setSelected(cart.map(item => item.produit_id + item.start + item.end));
    }
  }, [open, cart]);

  if (!open) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSelect = (key) => {
    setSelected(sel =>
      sel.includes(key) ? sel.filter(k => k !== key) : [...sel, key]
    );
  };

  // Retirer 1 unité d'un produit
  const handleRemoveOne = (item) => {
    setCart(prev => {
      const newCart = prev.map(prod =>
        (prod.produit_id === item.produit_id && prod.start === item.start && prod.end === item.end)
          ? { ...prod, quantity: prod.quantity - 1 }
          : prod
      ).filter(prod => prod.quantity > 0);
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  // Ajouter 1 unité d'un produit
  const handleAddOne = (item) => {
    setCart(prev => {
      const newCart = prev.map(prod =>
        (prod.produit_id === item.produit_id && prod.start === item.start && prod.end === item.end)
          ? { ...prod, quantity: prod.quantity + 1 }
          : prod
      );
      localStorage.setItem('cart', JSON.stringify(newCart));
      return newCart;
    });
  };

  const handleReserveSelected = () => {
    // Stocke la sélection dans le localStorage pour la page de réservation
    localStorage.setItem('selectedCart', JSON.stringify(
      cart.filter(item => selected.includes(item.produit_id + item.start + item.end))
    ));
    onClose();
    navigate('/reserve-cart');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={handleBackdropClick}
      style={{ backdropFilter: 'blur(2px)' }}
    >
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-md max-h-[90vh] flex flex-col fixed"
           style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h2 className="text-lg font-bold">Mon panier</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-2xl font-bold"
            aria-label="Fermer le panier"
          >
            &times;
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <p className="text-gray-500">Votre panier est vide.</p>
          ) : (
            cart.map(item => {
              const key = item.produit_id + item.start + item.end;
              return (
                <div key={key} className="mb-4 border-b pb-2 flex items-start gap-2">
                  <input
                    type="checkbox"
                    checked={selected.includes(key)}
                    onChange={() => handleSelect(key)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="font-semibold">{item.product.nom || item.product.name}</div>
                    <div className="text-xs text-gray-500">Début : {item.start}</div>
                    <div className="text-xs text-gray-500">Fin : {item.end}</div>
                    <div className="flex items-center justify-between">
                      <span>
                        Quantité : <span className="font-bold">{item.quantity}</span>
                      </span>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="danger"
                          className="px-2 py-1 text-xs rounded shadow hover:bg-red-700"
                          onClick={() => handleRemoveOne(item)}
                        >
                          -1
                        </Button>
                        <Button
                          size="sm"
                          variant="primary"
                          className="px-2 py-1 text-xs rounded shadow hover:bg-indigo-700"
                          onClick={() => handleAddOne(item)}
                        >
                          +1
                        </Button>
                      </div>
                    </div>
                    <div>Prix : {item.price} $</div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="p-4 border-t dark:border-gray-700 flex flex-col gap-2">
          <Button
            onClick={handleReserveSelected}
            disabled={selected.length === 0}
          >
            Réserver la sélection
          </Button>
          <Button variant="secondary" onClick={clearCart} disabled={cart.length === 0}>
            Vider le panier
          </Button>
        </div>
      </div>
    </div>
  );
}