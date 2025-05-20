import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MentionsPage({ darkMode, toggleDarkMode }) {
  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Mentions Légales
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              1. Informations légales
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              LocGames est une société par actions simplifiée (SAS) au capital de 10 000 €,
              immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 123 456 789.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
              Siège social : Campus Universitaire, Kinshasa, RDC<br />
              SIRET : 123 456 789 00001<br />
              TVA Intracommunautaire : FR 12 345678901
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              2. Direction de la publication
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Directeur de la publication : John Doe<br />
              Email : direction@locgames.edu
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              3. Hébergement
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Le site locgames.edu est hébergé par :<br />
              Netlify, Inc.<br />
              2325 3rd Street, Suite 215<br />
              San Francisco, California 94107<br />
              États-Unis
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              4. Propriété intellectuelle
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              L'ensemble du contenu de ce site (architecture, textes, photos, illustrations) est la propriété 
              exclusive de LocGames ou de ses partenaires. Toute reproduction, représentation, modification, 
              publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, 
              par quelque procédé que ce soit, et sur quelque support que ce soit est interdite.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              5. Protection des données personnelles
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement 
              Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, 
              de suppression et d'opposition aux données personnelles vous concernant.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
              Ces droits peuvent être exercés en nous contactant à :<br />
              Email : privacy@locgames.edu<br />
              Adresse : Campus Universitaire, Kinshasa, RDC
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              6. Cookies
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Notre site utilise des cookies pour améliorer votre expérience de navigation. 
              Pour plus d'informations, consultez notre <a href="/cookies" className="text-indigo-600 hover:text-indigo-800">politique de cookies</a>.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              7. Liens hypertextes
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Le site peut contenir des liens vers d'autres sites. LocGames n'exerce aucun contrôle sur ces sites 
              et n'assume aucune responsabilité quant à leur contenu.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              8. Droit applicable
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux 
              français seront seuls compétents.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              9. Modifications
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              LocGames se réserve le droit de modifier les présentes mentions légales à tout moment. 
              Les utilisateurs du site sont donc invités à les consulter de manière régulière.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              10. Contact
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Pour toute question concernant ces mentions légales, vous pouvez nous contacter à :<br />
              Email : legal@locgames.edu<br />
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