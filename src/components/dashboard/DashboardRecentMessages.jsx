import React from 'react';

export default function DashboardRecentMessages() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Messages récents</h3>
        <button className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline">
          Voir tous les messages
        </button>
      </div>
      <div className="space-y-4">
        {/* Message 1 */}
        <div className="p-4 border rounded-lg bg-indigo-50 dark:bg-indigo-900 border-indigo-100 dark:border-indigo-900">
          <div className="flex items-start">
            <img src="https://via.placeholder.com/40" alt="Sophie L." className="w-10 h-10 rounded-full mr-3" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Sophie L.</h4>
                <span className="text-xs text-gray-500 dark:text-gray-400">Il y a 2 heures</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Bonjour Michel, je voulais savoir si l'appareil photo Canon est disponible pour le weekend prochain ? J'aurais besoin de...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-indigo-600 dark:text-indigo-300 font-medium flex items-center">
                  <i className="fas fa-camera-retro mr-1"></i> Appareil photo Canon
                </span>
                <button className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline">
                  Répondre
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Message 2 */}
        <div className="p-4 border rounded-lg dark:bg-gray-900 dark:border-gray-700">
          <div className="flex items-start">
            <img src="https://via.placeholder.com/40" alt="Thomas B." className="w-10 h-10 rounded-full mr-3" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Thomas B.</h4>
                <span className="text-xs text-gray-500 dark:text-gray-400">Hier</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Merci pour la confirmation de réservation. Est-ce qu'il serait possible d'avoir les clés un peu plus tôt que prévu ?
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-indigo-600 dark:text-indigo-300 font-medium flex items-center">
                  <i className="fas fa-home mr-1"></i> Studio centre-ville
                </span>
                <button className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline">
                  Répondre
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Message 3 */}
        <div className="p-4 border rounded-lg bg-indigo-50 dark:bg-indigo-900 border-indigo-100 dark:border-indigo-900">
          <div className="flex items-start">
            <img src="https://via.placeholder.com/40" alt="Julie M." className="w-10 h-10 rounded-full mr-3" />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Julie M.</h4>
                <span className="text-xs text-gray-500 dark:text-gray-400">Il y a 2 jours</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Bonjour, je viens de faire une demande de réservation pour le vélo électrique. Pourriez-vous me confirmer si...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-indigo-600 dark:text-indigo-300 font-medium flex items-center">
                  <i className="fas fa-bicycle mr-1"></i> Vélo électrique urbain
                </span>
                <button className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline">
                  Répondre
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}