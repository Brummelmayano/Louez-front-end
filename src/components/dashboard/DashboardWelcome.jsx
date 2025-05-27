import React from 'react';

export default function DashboardWelcome({ user }) {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 mb-6 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Bonjour, {user?.first_name || 'Utilisateur'} 👋
          </h2>
          <p className="mb-4">Voici un aperçu de votre activité de location.</p>
          <div className="flex space-x-4">
            <div>
              <p className="text-indigo-200 text-sm">Revenus du mois</p>
              <p className="text-2xl font-bold">1 245&nbsp;$</p>
            </div>
            <div>
              <p className="text-indigo-200 text-sm">Réservations actives</p>
              <p className="text-2xl font-bold">8</p>
            </div>
            <div>
              <p className="text-indigo-200 text-sm">Taux d'occupation</p>
              <p className="text-2xl font-bold">72%</p>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-opacity-90">
            Voir mes statistiques
          </button>
        </div>
      </div>
    </div>
  );
}