// src/components/ProductCard.jsx
import React from 'react';

export default function ProductCard({ product, onClick, className = '' }) {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = hasDiscount 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  // URL de l'image
  const backEndURL = import.meta.env.VITE_APP_BACK_END_URL;
  const imageUrl = product.premiere_image?.image
    ? `${backEndURL}${product.premiere_image.image}`
    : '/src/assets/image_not_found.jpg'; // chemin par défaut

  return (
    <div
      onClick={() => onClick(product)}
      className={`cursor-pointer bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${className}`}
    >
      {/* Image container with badge */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={product.type || 'Product image'}
          className="w-full h-auto max-h-[200px] object-cover rounded-lg"
        />
        
        {product.stock > 0 ? (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Disponible
          </span>
        ) : (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            Indisponible
          </span>
        )}
        
        {hasDiscount && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{discountPercentage}%
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{product.name}</h3>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">
              {product.rating || '4.5'}
            </span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          {product.nom || ''}
        </p>
        
        <div className="flex items-center justify-between">
          <div>
            {hasDiscount ? (
              <div className="flex items-center">
                <span className="text-lg font-bold text-gray-800 dark:text-white">{product.price}$</span>
                <span className="ml-2 text-sm line-through text-gray-500">{product.originalPrice}$</span>
              </div>
            ) : (
              <span className="text-lg font-bold text-gray-800 dark:text-white">{product.tarif_jour}$</span>
            )}
            <p className="text-xs text-gray-500 dark:text-gray-400">la journée</p>
          </div>

          <div>
            {hasDiscount ? (
              <div className="flex items-center">
                <span className="text-lg font-bold text-gray-800 dark:text-white">{product.price}$</span>
                <span className="ml-2 text-sm line-through text-gray-500">{product.originalPrice}$</span>
              </div>
            ) : (
              <span className="text-lg font-bold text-gray-800 dark:text-white">{product.tarif_nuit}$</span>
            )}
            <p className="text-xs text-gray-500 dark:text-gray-400">la nuit</p>
          </div>
          
          <button className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-medium px-3 py-1.5 rounded-md hover:shadow-md transition-shadow">
            Voir détails
          </button>
        </div>
      </div>
    </div>
  );
}
