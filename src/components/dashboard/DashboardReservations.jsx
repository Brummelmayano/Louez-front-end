import React from 'react';

export default function DashboardReservations() {
  return (
    <section id="reservations" className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Réservations récentes</h2>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        <li className="py-3 flex justify-between items-center">
          <span className="text-gray-800 dark:text-gray-200">Guitare électrique Fender</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">du 10/06 au 15/06</span>
        </li>
        <li className="py-3 flex justify-between items-center">
          <span className="text-gray-800 dark:text-gray-200">Console PS5</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">du 01/06 au 07/06</span>
        </li>
      </ul>
      <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Voir toutes les réservations</button>
    </section>
  );
}