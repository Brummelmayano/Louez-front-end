// src/pages/PrivacyPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPage({ darkMode, toggleDarkMode }) {
  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Politique de Confidentialité</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300">
              Dernière mise à jour : 1er juin 2023
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">1. Introduction</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Chez LocGames, nous accordons une grande importance à la protection de vos données personnelles. Cette Politique de Confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations lorsque vous utilisez notre site web, notre application mobile et nos services (collectivement désignés comme les "Services").
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              En utilisant nos Services, vous acceptez les pratiques décrites dans cette Politique de Confidentialité. Si vous n'acceptez pas cette politique, veuillez ne pas utiliser nos Services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">2. Informations que nous collectons</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">2.1 Informations que vous nous fournissez</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Nous collectons les informations que vous nous fournissez directement, notamment :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Informations d'inscription : nom, prénom, adresse email, mot de passe, numéro de téléphone.</li>
              <li>Informations de profil : photo de profil, établissement d'enseignement, année d'études.</li>
              <li>Contenu que vous partagez : messages, commentaires, photos, vidéos, et autres contenus que vous publiez sur nos Services.</li>
              <li>Informations de paiement : détails de carte bancaire ou autres informations nécessaires pour traiter les transactions.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">2.2 Informations collectées automatiquement</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Lorsque vous utilisez nos Services, nous collectons automatiquement certaines informations, notamment :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Données de journal : adresse IP, type de navigateur, pages visitées, heure et date de la visite.</li>
              <li>Informations sur l'appareil : modèle de l'appareil, système d'exploitation, identifiants uniques de l'appareil.</li>
              <li>Données d'utilisation : interactions avec nos Services, préférences, et autres données analytiques.</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}