import React from 'react';

export default function DashboardFinance() {
  return (
    <section id="finance" className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Finances</h2>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span className="text-gray-700 dark:text-gray-200">Solde actuel</span>
          <span className="font-bold text-indigo-600 dark:text-indigo-400">1 200 €</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700 dark:text-gray-200">Paiements en attente</span>
          <span className="text-gray-500 dark:text-gray-400">300 €</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700 dark:text-gray-200">Dernier paiement</span>
          <span className="text-gray-500 dark:text-gray-400">500 € (02/06/2025)</span>
        </div>
      </div>
      <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Gérer mes paiements</button>
    </section>
  );
}