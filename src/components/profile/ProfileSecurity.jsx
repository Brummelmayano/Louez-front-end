import React from 'react';

export default function ProfileSecurity({ user }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Sécurité & Activités</h3>
      <div className="mb-2">Changer le mot de passe</div>
      <div className="mb-2">Sessions actives : <span className="text-gray-500">À venir</span></div>
      <div className="mb-2">Journal de connexion : <span className="text-gray-500">À venir</span></div>
      {/* Ajoute ici les formulaires et listes de sécurité */}
    </div>
  );
}