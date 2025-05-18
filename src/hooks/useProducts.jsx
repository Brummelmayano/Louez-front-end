// src/hooks/useProducts.jsx

import { useState, useEffect } from 'react';
import api from '../api/api';

/**
 * Hook basique pour récupérer la liste des produits.
 * GET /produits/produits/
 */

// Intercepteur pour gérer les erreurs de réponse API
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Rediriger vers la page de connexion
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get('/produits/produits/');
      setProducts(response.data);
    } catch (err) {
      console.error('Erreur lors de la récupération des produits :', err); // Utilisation de `err`
      setError('Impossible de charger les produits. Veuillez réessayer plus tard.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error };
}
