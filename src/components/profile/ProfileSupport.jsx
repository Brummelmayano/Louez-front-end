import React from 'react';

export default function ProfileSupport() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Support & Aide</h3>
      <ul className="mb-4">
        <li>• <a href="/faq" className="text-indigo-600 underline">FAQ</a></li>
        <li>• <a href="/terms" className="text-indigo-600 underline">Conditions générales</a></li>
        <li>• <a href="/privacy" className="text-indigo-600 underline">Politique de confidentialité</a></li>
      </ul>
      <p>
        Besoin d’aide ? <a href="mailto:support@Louez.com" className="text-indigo-600 underline">Contactez le support</a>
      </p>
    </div>
  );
}