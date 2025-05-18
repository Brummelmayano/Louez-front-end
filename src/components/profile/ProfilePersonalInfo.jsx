import React from 'react';

export default function ProfilePersonalInfo({ user }) {
  // Ajoute ici les formulaires d'édition, la vérification, etc.
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Informations personnelles</h3>
      <div className="mb-2">Email : {user.email}</div>
      <div className="mb-2">Téléphone : {user.phone_number || <span className="text-gray-400">Non renseigné</span>}</div>
      {/* Ajoute ici la gestion des adresses, changement de mot de passe, etc. */}
    </div>
  );
}