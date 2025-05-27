// src/pages/TermsPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsPage({ darkMode, toggleDarkMode }) {
  return (
    <div className="bg-background dark:bg-gray-900 min-h-screen flex flex-col">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="pt-24 pb-16 flex-1">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Conditions Générales d'Utilisation</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300">
              Dernière mise à jour : 1er juin 2023
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">1. Introduction</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Bienvenue sur Louez, une plateforme de location de consoles de jeux vidéo entre étudiants. Les présentes Conditions Générales d'Utilisation (ci-après "CGU") régissent votre utilisation de notre site web, de notre application mobile et de nos services (collectivement désignés comme les "Services").
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              En accédant à nos Services ou en les utilisant, vous acceptez d'être lié par ces CGU. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos Services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">2. Définitions</h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li><strong>"Louez"</strong>, <strong>"nous"</strong>, <strong>"notre"</strong> ou <strong>"nos"</strong> désigne la société Louez SAS.</li>
              <li><strong>"Utilisateur"</strong>, <strong>"vous"</strong>, <strong>"votre"</strong> ou <strong>"vos"</strong> désigne toute personne qui accède à nos Services ou les utilise.</li>
              <li><strong>"Propriétaire"</strong> désigne un Utilisateur qui propose une console à la location via nos Services.</li>
              <li><strong>"Locataire"</strong> désigne un Utilisateur qui loue une console via nos Services.</li>
              <li><strong>"Console"</strong> désigne tout matériel de jeu vidéo proposé à la location sur notre plateforme, y compris les consoles, manettes, accessoires et écrans.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">3. Conditions d'inscription</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Pour utiliser nos Services, vous devez :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Être âgé d'au moins 18 ans ou avoir l'âge de la majorité légale dans votre juridiction, si celui-ci est supérieur à 18 ans.</li>
              <li>Être inscrit dans un établissement d'enseignement supérieur reconnu.</li>
              <li>Fournir des informations exactes, à jour et complètes lors de votre inscription et maintenir ces informations à jour.</li>
              <li>Créer un compte personnel que vous ne partagerez avec personne d'autre.</li>
              <li>Respecter toutes les lois locales, nationales et internationales applicables.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">4. Fonctionnement du service</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">4.1 Pour les Propriétaires</h3>
            <p className="text-gray-600 dark:text-gray-300">
              En tant que Propriétaire, vous pouvez :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Publier des annonces pour vos Consoles.</li>
              <li>Définir les tarifs, la disponibilité et les conditions de location.</li>
              <li>Accepter ou refuser les demandes de location.</li>
              <li>Communiquer avec les Locataires potentiels.</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
              Vous vous engagez à :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Fournir des informations exactes et complètes sur vos Consoles.</li>
              <li>Proposer uniquement des Consoles dont vous êtes le propriétaire légitime.</li>
              <li>Maintenir vos Consoles en bon état de fonctionnement.</li>
              <li>Respecter les rendez-vous convenus avec les Locataires.</li>
              <li>Signaler tout problème ou dommage survenu pendant la location.</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">4.2 Pour les Locataires</h3>
            <p className="text-gray-600 dark:text-gray-300">
              En tant que Locataire, vous pouvez :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Rechercher et consulter les annonces de Consoles disponibles.</li>
              <li>Effectuer des demandes de location pour les périodes souhaitées.</li>
              <li>Communiquer avec les Propriétaires.</li>
              <li>Évaluer les Consoles et les Propriétaires après la location.</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
              Vous vous engagez à :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Utiliser les Consoles louées avec soin et conformément à leur usage normal.</li>
              <li>Respecter les dates et heures de prise en charge et de restitution convenues.</li>
              <li>Ne pas sous-louer ou prêter les Consoles à des tiers.</li>
              <li>Signaler immédiatement tout problème ou dommage survenu pendant la location.</li>
              <li>Restituer les Consoles dans l'état où vous les avez reçues.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">5. Paiements et frais</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Les tarifs de location sont fixés par les Propriétaires. Louez prélève une commission de 10% sur chaque transaction réalisée via la plateforme.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
              Les paiements sont traités de manière sécurisée par notre prestataire de paiement. Le montant total de la location est débité au moment de la confirmation de la réservation par le Propriétaire.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
              En cas d'annulation :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Si le Locataire annule plus de 48 heures avant le début de la location : remboursement intégral.</li>
              <li>Si le Locataire annule moins de 48 heures avant le début de la location : remboursement de 50% du montant.</li>
              <li>Si le Propriétaire annule : remboursement intégral au Locataire et pénalité pour le Propriétaire.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">6. Assurance et dommages</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Louez propose une assurance qui couvre les dommages accidentels pouvant survenir pendant la période de location. Cette assurance est incluse dans le prix de la location.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
              En cas de dommage :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Le Locataire doit signaler le dommage dans les 24 heures via l'application.</li>
              <li>Une franchise de 50$ est applicable pour tout sinistre.</li>
              <li>Les dommages intentionnels ou résultant d'une négligence grave ne sont pas couverts.</li>
              <li>En cas de vol, une plainte doit être déposée auprès des autorités compétentes.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">7. Propriété intellectuelle</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Tous les droits de propriété intellectuelle relatifs à nos Services, y compris les logos, marques, textes, images, vidéos, logiciels et bases de données, sont la propriété exclusive de Louez ou de ses concédants de licence.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
              Vous n'êtes pas autorisé à copier, modifier, distribuer, vendre ou louer une partie de nos Services sans notre autorisation écrite préalable.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">8. Limitation de responsabilité</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Louez agit uniquement en tant qu'intermédiaire entre les Propriétaires et les Locataires. Nous ne sommes pas responsables :
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>De l'exactitude des informations fournies par les Utilisateurs.</li>
              <li>Du comportement des Utilisateurs en dehors de notre plateforme.</li>
              <li>Des problèmes techniques ou défauts des Consoles louées.</li>
              <li>Des pertes ou dommages indirects résultant de l'utilisation de nos Services.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">9. Résiliation</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Nous nous réservons le droit de suspendre ou de résilier votre compte à tout moment, sans préavis, si nous estimons que vous avez violé ces CGU ou pour toute autre raison à notre seule discrétion.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
              Vous pouvez résilier votre compte à tout moment en nous contactant à support@Louez.edu.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">10. Modifications des CGU</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Nous pouvons modifier ces CGU à tout moment. Les modifications prendront effet dès leur publication sur notre site. Nous vous informerons des modifications importantes par email ou via notre application.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
              Votre utilisation continue de nos Services après la publication des modifications constitue votre acceptation de ces modifications.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">11. Droit applicable et juridiction</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Ces CGU sont régies par le droit français. Tout litige relatif à ces CGU sera soumis à la compétence exclusive des tribunaux de Paris, France.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">12. Contact</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Pour toute question concernant ces CGU, veuillez nous contacter à :
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
              Louez SAS<br />
              123 Avenue des Jeux<br />
              75000 Paris, France<br />
              Email : legal@Louez.edu<br />
              Téléphone : 01 23 45 67 89
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

