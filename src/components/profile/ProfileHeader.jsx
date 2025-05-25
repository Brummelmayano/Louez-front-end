import React from 'react';
import Button from '../Button';

export default function ProfileHeader({ user, onEdit, onLogout }) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <img
          src={user.avatar || '/src/assets/react.svg'}
          alt="Avatar"
          className="w-20 h-20 rounded-full border-2 border-indigo-500 object-cover"
        />
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{user.first_name} {user.last_name}</h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">@{user.username}</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 px-2 py-1 rounded">
              Membre depuis {new Date(user.date_joined).toLocaleDateString()}
            </span>
            <span className="text-xs bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 px-2 py-1 rounded">
              Statut : {user.loyalty_level || 'Bronze'}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-4 md:mt-0">
        <Button
          variant="secondary"
          onClick={onEdit}
          className="text-gray-900 dark:text-gray-100"
        >
          Modifier le profil
        </Button>
        <Button
          variant="danger"
          onClick={onLogout}
          className="text-gray-900 dark:text-gray-100"
        >
          Déconnexion
        </Button>
      </div>
    </div>
  );
}