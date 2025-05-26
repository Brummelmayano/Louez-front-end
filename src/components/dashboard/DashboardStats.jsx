import React from 'react';

export default function DashboardStats() {
  return (
    <section id="stats" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center">
        <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">12</span>
        <span className="mt-2 text-gray-700 dark:text-gray-200">Annonces actives</span>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center">
        <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">5</span>
        <span className="mt-2 text-gray-700 dark:text-gray-200">Réservations en cours</span>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center">
        <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">3</span>
        <span className="mt-2 text-gray-700 dark:text-gray-200">Messages non lus</span>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center">
        <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">1 200 €</span>
        <span className="mt-2 text-gray-700 dark:text-gray-200">Revenus ce mois</span>
      </div>
    </section>
  );
}