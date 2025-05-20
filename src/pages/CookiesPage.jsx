import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CookiesPage({ darkMode, toggleDarkMode }) {
  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Politique de Cookies
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300">
              Dernière mise à jour : 1er juin 2023
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              1. Qu'est-ce qu'un cookie ?
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Un cookie est un petit fichier texte stocké sur votre ordinateur ou appareil mobile lorsque vous visitez un site web. Les cookies sont largement utilisés pour faire fonctionner les sites web ou les rendre plus efficaces, ainsi que pour fournir des informations aux propriétaires du site.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              2. Comment utilisons-nous les cookies ?
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Nous utilisons différents types de cookies pour les raisons suivantes :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Cookies essentiels : nécessaires au fonctionnement du site</li>
              <li>Cookies de performance : analyse du trafic et de l'utilisation</li>
              <li>Cookies de fonctionnalité : personnalisation de votre expérience</li>
              <li>Cookies de ciblage : publicités pertinentes</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              3. Cookies spécifiques utilisés
            </h2>
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 mb-6">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Nom</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Type</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Durée</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-2">Objectif</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">session_id</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">Essentiel</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">Session</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">Gestion de la session utilisateur</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">preferences</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">Fonctionnalité</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">1 an</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">Sauvegarde des préférences</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">analytics_id</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">Performance</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">2 ans</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-2">Analyse du trafic</td>
                </tr>
              </tbody>
            </table>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              4. Gestion des cookies
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. Vous pouvez supprimer tous les cookies déjà présents sur votre ordinateur et paramétrer la plupart des navigateurs pour les bloquer. Toutefois, dans ce cas, vous devrez peut-être ajuster manuellement certaines préférences à chaque visite sur un site, et certains services et fonctionnalités pourraient ne pas fonctionner.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">
              Pour gérer les cookies dans votre navigateur :
            </h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Chrome : Paramètres → Confidentialité et sécurité → Cookies</li>
              <li>Firefox : Options → Vie privée → Cookies</li>
              <li>Safari : Préférences → Confidentialité → Cookies</li>
              <li>Edge : Paramètres → Confidentialité et services → Cookies</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              5. Modifications de notre politique
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Nous pouvons modifier cette politique de cookies à tout moment. Toute modification sera publiée sur cette page et, si les modifications sont importantes, nous fournirons un avis plus visible.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              6. Nous contacter
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Si vous avez des questions concernant notre utilisation des cookies, veuillez nous contacter à :
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
              Email : privacy@locgames.edu<br />
              Téléphone : +243 825608939<br />
              Adresse : Campus Universitaire, Kinshasa, RDC
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}