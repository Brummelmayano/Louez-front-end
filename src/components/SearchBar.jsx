// src/components/SearchBar.jsx
import React, { useState } from 'react';
import DatePicker from './DatePicker';

export default function SearchBar({ onSearch, className = '' }) {
  const [type, setType] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSearch({ type, start, end, location });
  };







  return (

           <form
  onSubmit={handleSubmit}
  className={`flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-4 ${className}`}
>
  {/* Conteneur global en grille */}
  <div className="flex-1">
    <label
      htmlFor="console-type"
      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
    >
      Type de produit
    </label>
    <select
      id="console-type"
      name="type"
      value={type}
      onChange={e => setType(e.target.value)}
      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-violet-500"
    >
      <option value="">Toutes les catégories</option>
      <option value="PS5">PlayStation 5</option>
      <option value="PS4">PlayStation 4</option>
      <option value="XBOX">Xbox Series X</option>
      <option value="SWITCH">Nintendo Switch</option>
      <option value="SCREEN">Écrans</option>
      <option value="CONTROLLER">Manettes</option>
    </select>
  </div>

  <div className="flex-1">
    <label
      htmlFor="start_date"
      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
    >
      Date de début
    </label>
    <input
      type="date"
      id="start_date"
      name="start_date"
      value={start}
      onChange={e => setStart(e.target.value)}
      min={new Date().toISOString().split('T')[0]}
      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-violet-500"
    />
  </div>

  <div className="flex-1">
    <label
      htmlFor="end_date"
      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
    >
      Date de fin
    </label>
    <input
      type="date"
      id="end_date"
      name="end_date"
      value={end}
      onChange={e => setEnd(e.target.value)}
      min={start || new Date().toISOString().split('T')[0]}
      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-violet-500"
    />
  </div>

      {/* Button */}
      <div className="mt-6 flex justify-center">
                    <button 
                      type="submit" 
                      className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-medium rounded-md hover:shadow-lg hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <div className="flex items-center">
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      Rechercher
      </div>

    </button>
  </div>
</form>
  

  );
}

