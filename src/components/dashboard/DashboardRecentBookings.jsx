import React from 'react';

export default function DashboardRecentBookings() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      {/* Réservations récentes */}
      <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Réservations récentes</h3>
          <button className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline">
            Voir toutes
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                <th className="px-4 py-3">Client</th>
                <th className="px-4 py-3">Bien</th>
                <th className="px-4 py-3">Dates</th>
                <th className="px-4 py-3">Montant</th>
                <th className="px-4 py-3">Statut</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-4 py-4">
                  <div className="flex items-center">
                    <img src="https://via.placeholder.com/40" alt="Sophie L." className="w-8 h-8 rounded-full mr-3" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">Sophie L.</p>
                      <p className="text-xs text-gray-500 dark:text-gray-300">sophie@email.com</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <p className="font-medium text-gray-900 dark:text-gray-100">Appareil photo Canon</p>
                  <p className="text-xs text-gray-500 dark:text-gray-300">Électronique</p>
                </td>
                <td className="px-4 py-4">
                  <p className="font-medium text-gray-900 dark:text-gray-100">06-08 juin</p>
                  <p className="text-xs text-gray-500 dark:text-gray-300">3 jours</p>
                </td>
                <td className="px-4 py-4">
                  <p className="font-medium text-gray-900 dark:text-gray-100">135 $</p>
                </td>
                <td className="px-4 py-4">
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold px-2.5 py-0.5 rounded">En cours</span>
                </td>
                <td className="px-4 py-4">
                  <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4">
                  <div className="flex items-center">
                    <img src="https://via.placeholder.com/40" alt="Thomas B." className="w-8 h-8 rounded-full mr-3" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">Thomas B.</p>
                      <p className="text-xs text-gray-500 dark:text-gray-300">thomas@email.com</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <p className="font-medium text-gray-900 dark:text-gray-100">Studio centre-ville</p>
                  <p className="text-xs text-gray-500 dark:text-gray-300">Immobilier</p>
                </td>
                <td className="px-4 py-4">
                  <p className="font-medium text-gray-900 dark:text-gray-100">15-17 juin</p>
                  <p className="text-xs text-gray-500 dark:text-gray-300">3 jours</p>
                </td>
                <td className="px-4 py-4">
                  <p className="font-medium text-gray-900 dark:text-gray-100">195 $</p>
                </td>
                <td className="px-4 py-4">
                  <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs font-semibold px-2.5 py-0.5 rounded">À venir</span>
                </td>
                <td className="px-4 py-4">
                  <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4">
                  <div className="flex items-center">
                    <img src="https://via.placeholder.com/40" alt="Julie M." className="w-8 h-8 rounded-full mr-3" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">Julie M.</p>
                      <p className="text-xs text-gray-500 dark:text-gray-300">julie@email.com</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <p className="font-medium text-gray-900 dark:text-gray-100">Vélo électrique urbain</p>
                  <p className="text-xs text-gray-500 dark:text-gray-300">Véhicule</p>
                </td>
                <td className="px-4 py-4">
                  <p className="font-medium text-gray-900 dark:text-gray-100">26-28 juin</p>
                  <p className="text-xs text-gray-500 dark:text-gray-300">3 jours</p>
                </td>
                <td className="px-4 py-4">
                  <p className="font-medium text-gray-900 dark:text-gray-100">60 $</p>
                </td>
                <td className="px-4 py-4">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded">Confirmée</span>
                </td>
                <td className="px-4 py-4">
                  <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4">
                  <div className="flex items-center">
                    <img src="https://via.placeholder.com/40" alt="Marc D." className="w-8 h-8 rounded-full mr-3" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">Marc D.</p>
                      <p className="text-xs text-gray-500 dark:text-gray-300">marc@email.com</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <p className="font-medium text-gray-900 dark:text-gray-100">Perceuse-visseuse Bosch</p>
                  <p className="text-xs text-gray-500 dark:text-gray-300">Outil</p>
                </td>
                <td className="px-4 py-4">
                  <p className="font-medium text-gray-900 dark:text-gray-100">01-02 juin</p>
                  <p className="text-xs text-gray-500 dark:text-gray-300">2 jours</p>
                </td>
                <td className="px-4 py-4">
                  <p className="font-medium text-gray-900 dark:text-gray-100">16 $</p>
                </td>
                <td className="px-4 py-4">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-xs font-semibold px-2.5 py-0.5 rounded">Terminée</span>
                </td>
                <td className="px-4 py-4">
                  <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300">
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Performances des biens */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Performances des biens</h3>
          <button className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline">
            Voir tous
          </button>
        </div>
        <div className="space-y-4">
          {/* Console PS5 */}
          <div className="p-4 border dark:border-gray-700 rounded-lg">
            <div className="flex items-center mb-2">
              <img src="https://via.placeholder.com/60x40" alt="Console PS5" className="w-12 h-8 object-cover rounded mr-3" />
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">Console PS5</p>
                <p className="text-xs text-gray-500 dark:text-gray-300">Électronique</p>
              </div>
              <div className="ml-auto">
                <span className="text-green-500 font-medium">
                  <i className="fas fa-arrow-up mr-1"></i>92%
                </span>
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "92%" }}></div>
            </div>
            <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-300">
              <span>Taux d'occupation</span>
              <span>92%</span>
            </div>
          </div>
          {/* Studio centre-ville */}
          <div className="p-4 border dark:border-gray-700 rounded-lg">
            <div className="flex items-center mb-2">
              <img src="https://via.placeholder.com/60x40" alt="Appartement" className="w-12 h-8 object-cover rounded mr-3" />
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">Studio centre-ville</p>
                <p className="text-xs text-gray-500 dark:text-gray-300">Immobilier</p>
              </div>
              <div className="ml-auto">
                <span className="text-green-500 font-medium">
                  <i className="fas fa-arrow-up mr-1"></i>85%
                </span>
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
            </div>
            <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-300">
              <span>Taux d'occupation</span>
              <span>85%</span>
            </div>
          </div>
          {/* Vélo électrique */}
          <div className="p-4 border dark:border-gray-700 rounded-lg">
            <div className="flex items-center mb-2">
              <img src="https://via.placeholder.com/60x40" alt="Vélo électrique" className="w-12 h-8 object-cover rounded mr-3" />
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">Vélo électrique</p>
                <p className="text-xs text-gray-500 dark:text-gray-300">Véhicule</p>
              </div>
              <div className="ml-auto">
                <span className="text-yellow-500 font-medium">
                  <i className="fas fa-arrow-right mr-1"></i>65%
                </span>
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "65%" }}></div>
            </div>
            <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-300">
              <span>Taux d'occupation</span>
              <span>65%</span>
            </div>
          </div>
          {/* Piano numérique */}
          <div className="p-4 border dark:border-gray-700 rounded-lg">
            <div className="flex items-center mb-2">
              <img src="https://via.placeholder.com/60x40" alt="Piano numérique" className="w-12 h-8 object-cover rounded mr-3" />
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">Piano numérique</p>
                <p className="text-xs text-gray-500 dark:text-gray-300">Instrument</p>
              </div>
              <div className="ml-auto">
                <span className="text-red-500 font-medium">
                  <i className="fas fa-arrow-down mr-1"></i>42%
                </span>
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full" style={{ width: "42%" }}></div>
            </div>
            <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-300">
              <span>Taux d'occupation</span>
              <span>42%</span>
            </div>
          </div>
          {/* Tondeuse à gazon */}
          <div className="p-4 border dark:border-gray-700 rounded-lg">
            <div className="flex items-center mb-2">
              <img src="https://via.placeholder.com/60x40" alt="Tondeuse" className="w-12 h-8 object-cover rounded mr-3" />
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">Tondeuse à gazon</p>
                <p className="text-xs text-gray-500 dark:text-gray-300">Outil</p>
              </div>
              <div className="ml-auto">
                <span className="text-green-500 font-medium">
                  <i className="fas fa-arrow-up mr-1"></i>78%
                </span>
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "78%" }}></div>
            </div>
            <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-300">
              <span>Taux d'occupation</span>
              <span>78%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}