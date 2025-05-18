import React from 'react';

export default function ProfileSettings({ user }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Paramètres & Préférences</h3>
      <div className="mb-2">Langue : <span className="font-medium">Français</span></div>
      <div className="mb-2">Mode : <span className="font-medium">Clair/Sombre</span></div>
      <div className="mb-2">Notifications : <span className="font-medium">E-mail, SMS</span></div>
      {/* Ajoute ici les contrôles pour modifier les préférences */}
    </div>
  );
}