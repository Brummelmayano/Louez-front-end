import React from 'react';

export default function DashboardMessages() {
  return (
    <section id="messages" className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">Messages récents</h2>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        <li className="py-3">
          <span className="font-semibold text-gray-800 dark:text-gray-200">Alice</span>
          <span className="ml-2 text-gray-600 dark:text-gray-400">Bonjour, la guitare est-elle disponible ce week-end ?</span>
        </li>
        <li className="py-3">
          <span className="font-semibold text-gray-800 dark:text-gray-200">Bob</span>
          <span className="ml-2 text-gray-600 dark:text-gray-400">Merci pour la location de la PS5 !</span>
        </li>
      </ul>
      <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Voir tous les messages</button>
    </section>
  );
}