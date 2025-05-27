import React from 'react';

// Animation CSS pour le hover (compatible dark mode)
const cardHoverClass =
  "hover:shadow-lg hover:-translate-y-1 hover:scale-[1.03] transition-all duration-200";

export default function DashboardStats() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {/* Biens actifs */}
      <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm ${cardHoverClass}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-500 dark:text-gray-300 text-sm font-medium">Biens actifs</h3>
          <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold px-2.5 py-0.5 rounded">+2 ce mois</span>
        </div>
        <div className="flex items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">42</span>
          <span className="text-green-500 text-sm font-medium ml-2 flex items-center">
            {/* Flèche montante */}
            <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 12l7-7 7 7" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
            5%
          </span>
        </div>
        <div className="mt-4">
          <a href="#" className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline">Voir tous les biens</a>
        </div>
      </div>

      {/* Demandes en attente */}
      <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm ${cardHoverClass}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-500 dark:text-gray-300 text-sm font-medium">Demandes en attente</h3>
          <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs font-semibold px-2.5 py-0.5 rounded">Urgent</span>
        </div>
        <div className="flex items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">5</span>
          <span className="text-red-500 text-sm font-medium ml-2 flex items-center">
            {/* Flèche montante */}
            <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 12l7-7 7 7" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
            3
          </span>
        </div>
        <div className="mt-4">
          <a href="#" className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline">Traiter les demandes</a>
        </div>
      </div>

      {/* Messages non lus */}
      <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm ${cardHoverClass}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-500 dark:text-gray-300 text-sm font-medium">Messages non lus</h3>
          <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs font-semibold px-2.5 py-0.5 rounded">3 nouveaux</span>
        </div>
        <div className="flex items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">7</span>
        </div>
        <div className="mt-4">
          <a href="#" className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline">Voir les messages</a>
        </div>
      </div>

      {/* Note moyenne */}
      <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm ${cardHoverClass}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-500 dark:text-gray-300 text-sm font-medium">Note moyenne</h3>
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded">124 avis</span>
        </div>
        <div className="flex items-center">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">4.8</span>
          <div className="ml-2 text-yellow-400 flex">
            {/* 4 étoiles pleines */}
            {[...Array(4)].map((_, i) => (
              <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.175 0l-3.388 2.462c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
              </svg>
            ))}
            {/* 1 demi-étoile */}
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15.273l-3.763 2.27.72-4.205-3.047-2.97 4.217-.613L10 6.1l1.873 3.655 4.217.613-3.047 2.97.72 4.205z" />
              <path d="M10 6.1v9.173l3.763 2.27-.72-4.205 3.047-2.97-4.217-.613z" fill="#FFF" fillOpacity="0.5"/>
            </svg>
          </div>
        </div>
        <div className="mt-4">
          <a href="#" className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline">Voir les avis</a>
        </div>
      </div>
    </section>
  );
}