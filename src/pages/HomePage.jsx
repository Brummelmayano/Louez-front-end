// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import api from '../api/api';
import { useAuth } from '../hooks/useAuth';
import ReadyToStart from '../components/ReadyToStart';

export default function HomePage() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [filters, setFilters] = useState({ type: '', start: '', end: '' });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async (newFilters = {}) => {
    const { type, start, end } = { ...filters, ...newFilters };
    setFilters({ type, start, end });
    setLoading(true);
    setError(null);

    try {
      const params = {};
      if (type) params.type = type;
      if (start) params.start = `${start}T00:00:00`;
      if (end) params.end = `${end}T23:59:59`;

      const response = await api.get('/produits/produits/', { params });
      setProducts(response.data);
    } catch (err) {
      console.error(err);
      setError('Impossible de charger les produits.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (authLoading) {
    return <p className="pt-20 text-center">Chargement de votre profil…</p>;
  }

  return (
    <div className="bg-background dark:bg-gray-900 min-h-screen flex flex-col pt-20">
      <Header />

      {/* Hero Section */}
      <section className="bg-light dark:bg-dark py-16 justify-between md:py-24">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-6">
                <span className="text-indigo-600">Louez</span>, Jouez, Décompressez !
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                Après une journée de cours chargée, une interrogation stressante ou un examen épuisant, accordez-vous une pause bien méritée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={() => navigate('/products')} className="px-8 py-3">
                  Découvrir les consoles
                </Button>
                <Button variant="secondary" onClick={() => navigate('/how-it-works')} className="px-8 py-3">
                  Comment ça marche
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-40 h-40 bg-indigo-100 rounded-full opacity-70"></div>
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-purple-100 rounded-full opacity-70"></div>
                <img
                  src="/src/assets/xbox.avif"
                  alt="Console de jeu"
                  className="relative z-10 rounded-2xl shadow-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
            <SearchBar onSearch={fetchProducts} />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title text-gray-900 dark:text-gray-100">Consoles Populaires</h2>
            <p className="section-subtitle text-gray-600 dark:text-gray-300">
              Découvrez notre sélection de consoles les plus demandées par nos clients
            </p>
          </div>

          {loading && (
            <div className="flex justify-center">
              <div className="animate-pulse flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">Chargement des produits...</p>
              </div>
            </div>
          )}

          {error && (
            <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <p className="text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}

          {!loading && !error && (
            products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map(prod => (
                  <ProductCard
                    key={prod.id}
                    product={prod}
                    onClick={() => navigate(`/product/${prod.id}`)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center p-8 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 14h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Aucun produit trouvé pour ces critères.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      <section id="how-it-works" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Comment ça marche ?</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Louer une console n'a jamais été aussi simple. Suivez ces étapes pour profiter de votre expérience de jeu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 stroke-gray-900 dark:stroke-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">1. Choisissez votre console</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Parcourez notre catalogue et sélectionnez la console ou les accessoires qui vous intéressent.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 stroke-gray-900 dark:stroke-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">2. Réservez vos dates</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Choisissez la période de location qui vous convient, de quelques heures à plusieurs jours.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 stroke-gray-900 dark:stroke-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">3. Jouez et profitez</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Récupérez votre matériel à la résidence universitaire et commencez à jouer immédiatement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ReadyToStart />
      <Footer />
    </div>
  );
}

