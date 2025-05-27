import React from 'react';

export default function DashboardMyItems() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Mes biens</h3>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher un bien..."
              className="pl-8 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            />
            <span className="absolute left-3 top-2.5 text-gray-400 dark:text-gray-500">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 text-sm flex items-center">
            <i className="fas fa-plus mr-2"></i> Ajouter
          </button>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex border-b dark:border-gray-700">
          <button className="tab-button px-4 py-2 font-medium text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400">
            Tous (42)
          </button>
          <button className="tab-button px-4 py-2 font-medium text-gray-500 dark:text-gray-300">
            Disponibles (28)
          </button>
          <button className="tab-button px-4 py-2 font-medium text-gray-500 dark:text-gray-300">
            Loués (8)
          </button>
          <button className="tab-button px-4 py-2 font-medium text-gray-500 dark:text-gray-300">
            Maintenance (3)
          </button>
          <button className="tab-button px-4 py-2 font-medium text-gray-500 dark:text-gray-300">
            Masqués (3)
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              <th className="px-4 py-3">Bien</th>
              <th className="px-4 py-3">Catégorie</th>
              <th className="px-4 py-3">Prix</th>
              <th className="px-4 py-3">Statut</th>
              <th className="px-4 py-3">Popularité</th>
              <th className="px-4 py-3">Revenus</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <img src="https://via.placeholder.com/60x40" alt="Console PS5" className="w-12 h-8 object-cover rounded mr-3" />
                  <p className="font-medium text-gray-900 dark:text-gray-100">Console PS5 avec 2 manettes</p>
                </div>
              </td>
              <td className="px-4 py-4">
                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-semibold px-2.5 py-0.5 rounded">Électronique</span>
              </td>
              <td className="px-4 py-4">
                <p className="font-medium text-gray-900 dark:text-gray-100">25$ / jour</p>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-indigo-500 mr-2"></span>
                  <span className="text-gray-900 dark:text-gray-100">Loué</span>
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                  <span className="text-gray-900 dark:text-gray-100">92%</span>
                </div>
              </td>
              <td className="px-4 py-4">
                <p className="font-medium text-gray-900 dark:text-gray-100">425$</p>
                <p className="text-xs text-gray-500 dark:text-gray-300">ce mois</p>
              </td>
              <td className="px-4 py-4">
                <div className="flex space-x-2">
                  <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <img src="https://via.placeholder.com/60x40" alt="Guitare électrique" className="w-12 h-8 object-cover rounded mr-3" />
                  <p className="font-medium text-gray-900 dark:text-gray-100">Guitare électrique Fender</p>
                </div>
              </td>
              <td className="px-4 py-4">
                <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-xs font-semibold px-2.5 py-0.5 rounded">Instrument</span>
              </td>
              <td className="px-4 py-4">
                <p className="font-medium text-gray-900 dark:text-gray-100">15$ / jour</p>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-orange-400 mr-2"></span>
                  <span className="text-gray-900 dark:text-gray-100">Maintenance</span>
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "68%" }}></div>
                  </div>
                  <span className="text-gray-900 dark:text-gray-100">68%</span>
                </div>
              </td>
              <td className="px-4 py-4">
                <p className="font-medium text-gray-900 dark:text-gray-100">180$</p>
                <p className="text-xs text-gray-500 dark:text-gray-300">ce mois</p>
              </td>
              <td className="px-4 py-4">
                <div className="flex space-x-2">
                  <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <img src="https://via.placeholder.com/60x40" alt="Studio centre-ville" className="w-12 h-8 object-cover rounded mr-3" />
                  <p className="font-medium text-gray-900 dark:text-gray-100">Studio centre-ville</p>
                </div>
              </td>
              <td className="px-4 py-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded">Immobilier</span>
              </td>
              <td className="px-4 py-4">
                <p className="font-medium text-gray-900 dark:text-gray-100">65$ / jour</p>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 mr-2"></span>
                  <span className="text-gray-900 dark:text-gray-100">Disponible</span>
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                  <span className="text-gray-900 dark:text-gray-100">85%</span>
                </div>
              </td>
              <td className="px-4 py-4">
                <p className="font-medium text-gray-900 dark:text-gray-100">390$</p>
                <p className="text-xs text-gray-500 dark:text-gray-300">ce mois</p>
              </td>
              <td className="px-4 py-4">
                <div className="flex space-x-2">
                  <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <img src="https://via.placeholder.com/60x40" alt="Perceuse-visseuse" className="w-12 h-8 object-cover rounded mr-3" />
                  <p className="font-medium text-gray-900 dark:text-gray-100">Perceuse-visseuse Bosch</p>
                </div>
              </td>
              <td className="px-4 py-4">
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs font-semibold px-2.5 py-0.5 rounded">Outil</span>
              </td>
              <td className="px-4 py-4">
                <p className="font-medium text-gray-900 dark:text-gray-100">8$ / jour</p>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 mr-2"></span>
                  <span className="text-gray-900 dark:text-gray-100">Disponible</span>
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                  </div>
                  <span className="text-gray-900 dark:text-gray-100">78%</span>
                </div>
              </td>
              <td className="px-4 py-4">
                <p className="font-medium text-gray-900 dark:text-gray-100">112$</p>
                <p className="text-xs text-gray-500 dark:text-gray-300">ce mois</p>
              </td>
              <td className="px-4 py-4">
                <div className="flex space-x-2">
                  <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <img src="https://via.placeholder.com/60x40" alt="Vélo électrique" className="w-12 h-8 object-cover rounded mr-3" />
                  <p className="font-medium text-gray-900 dark:text-gray-100">Vélo électrique urbain</p>
                </div>
              </td>
              <td className="px-4 py-4">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold px-2.5 py-0.5 rounded">Véhicule</span>
              </td>
              <td className="px-4 py-4">
                <p className="font-medium text-gray-900 dark:text-gray-100">20$ / jour</p>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-slate-500 mr-2"></span>
                  <span className="text-gray-900 dark:text-gray-100">Masqué</span>
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                  <span className="text-gray-900 dark:text-gray-100">65%</span>
                </div>
              </td>
              <td className="px-4 py-4">
                <p className="font-medium text-gray-900 dark:text-gray-100">140$</p>
                <p className="text-xs text-gray-500 dark:text-gray-300">ce mois</p>
              </td>
              <td className="px-4 py-4">
                <div className="flex space-x-2">
                  <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100">
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-gray-500 dark:text-gray-300">
          Affichage de 5 sur 42 biens
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 rounded-lg border bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50" disabled>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="px-3 py-1 border bg-indigo-600 text-white rounded-lg">1</button>
          <button className="px-3 py-1 border bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">2</button>
          <button className="px-3 py-1 border bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">3</button>
          <button className="px-3 py-1 border bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">4</button>
          <button className="px-3 py-1 border bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">5</button>
          <button className="px-3 py-1 rounded-lg border bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}