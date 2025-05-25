import React from 'react';

export default function ProfileLoyalty({ user }) {
  // Exemple d'affichage des points et du niveau
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Programme de fidélité</h3>
      <div className="flex items-center gap-4">
        <div>
          <span className="block text-3xl font-bold text-indigo-600 dark:text-indigo-400">{user.loyalty_points || 0}</span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">Points cumulés</span>
        </div>
        <div>
          <span className="block text-lg font-semibold text-gray-900 dark:text-gray-100">{user.loyalty_level || 'Bronze'}</span>
          <span className="text-gray-500 dark:text-gray-400 text-sm">Niveau</span>
        </div>
      </div>
      {/* Historique des points à venir */}
    </div>
  );
}