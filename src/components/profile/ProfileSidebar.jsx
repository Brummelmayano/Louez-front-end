import React from 'react';

export default function ProfileSidebar({ sections, current, onChange }) {
  return (
    <nav className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-900 rounded-xl shadow-md p-4 mr-4">
      {sections.map(s => (
        <button
          key={s.key}
          className={`text-left px-4 py-2 rounded-lg mb-1 font-medium transition-colors ${
            current === s.key
              ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300'
              : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200'
          }`}
          onClick={() => onChange(s.key)}
        >
          {s.label}
        </button>
      ))}
    </nav>
  );
}