// src/pages/ProductsPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
import api from '../api/api';

export default function ProductsPage() {
  // Product types for filtering
  const productTypes = [
    { label: 'Toutes', value: '' },
    { label: 'Console', value: 'console' },
    { label: 'Accessoire', value: 'accessoire' },
    { label: 'Jeu', value: 'jeu' },
  ];

  // Sort options
  const sortOptions = [
    { label: 'Nouveautés', value: 'newest' },
    { label: 'Prix croissant', value: 'price-asc' },
    { label: 'Prix décroissant', value: 'price-desc' },
  ];

  const [filters, setFilters] = useState({ type: '', start: '', end: '' });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState('grid');
  const navigate = useNavigate();

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
      if (sortBy) params.sort = sortBy;

      const response = await api.get('/produits/produits/', { params });
      setProducts(response.data);
    } catch (err) {
      console.error(err);
      setError("Une erreur est survenue lors du chargement des produits.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, [sortBy]);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  const handleTypeChange = (e) => {
    fetchProducts({ type: e.target.value });
  };

  return (
    <div className="bg-background dark:bg-gray-900 min-h-screen flex flex-col">
      <Header />
      <main className="pt-20 pb-16 flex-1">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <SearchBar onSearch={fetchProducts} />
              <div className="flex flex-wrap items-center gap-4">
                <div>
                  <label className="mr-2 font-medium">Type :</label>
                  <select
                    value={filters.type}
                    onChange={handleTypeChange}
                    className="border rounded px-2 py-1"
                  >
                    {productTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mr-2 font-medium">Trier par :</label>
                  <select
                    value={sortBy}
                    onChange={handleSortChange}
                    className="border rounded px-2 py-1"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Button
                    variant={viewMode === 'grid' ? 'primary' : 'secondary'}
                    className="mr-2"
                    onClick={() => handleViewModeChange('grid')}
                  >
                    Grille
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'primary' : 'secondary'}
                    onClick={() => handleViewModeChange('list')}
                  >
                    Liste
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
            </div>
          ) : error ? (
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
                </div>
              </div>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20">
              <svg className="mx-auto h-12 w-12 max-w-[48px] max-h-[48px] text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">Aucun résultat</h3>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
                Aucune console ne correspond à vos critères de recherche.
              </p>
              <div className="mt-6">
                <Button onClick={() => fetchProducts({ type: '', start: '', end: '' })}>
                  Réinitialiser les filtres
                </Button>
              </div>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => navigate(`/product/${product.id}`)}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="cursor-pointer bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

