import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

export default function FaqPage({ darkMode, toggleDarkMode }) {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('general');
  
  const categories = [
    { id: 'general', name: 'Général' },
    { id: 'reservation', name: 'Réservation' },
    { id: 'payment', name: 'Paiement' },
    { id: 'technical', name: 'Technique' },
    { id: 'security', name: 'Sécurité' }
  ];

  const faqs = {
    general: [
      {
        question: "Qu'est-ce que LocGames ?",
        answer: "LocGames est une plateforme de location de consoles de jeux entre étudiants. Notre service permet aux étudiants de louer des consoles à des prix abordables pour des périodes courtes."
      },
      {
        question: "Qui peut utiliser LocGames ?",
        answer: "LocGames est accessible à tous les étudiants inscrits dans un établissement d'enseignement supérieur. Une vérification du statut étudiant est requise lors de l'inscription."
      },
      {
        question: "Quelles consoles sont disponibles ?",
        answer: "Nous proposons une large gamme de consoles incluant PS5, PS4, Xbox Series X/S, Nintendo Switch, ainsi que des accessoires comme des manettes et des écrans."
      }
    ],
    reservation: [
      {
        question: "Comment faire une réservation ?",
        answer: "Pour réserver une console : 1) Créez un compte 2) Choisissez une console 3) Sélectionnez vos dates 4) Effectuez le paiement 5) Récupérez la console au point de rendez-vous."
      },
      {
        question: "Puis-je annuler ma réservation ?",
        answer: "Oui, vous pouvez annuler gratuitement jusqu'à 48h avant le début de la location. Au-delà, des frais peuvent s'appliquer selon nos conditions."
      },
      {
        question: "Quelle est la durée minimum/maximum de location ?",
        answer: "La durée minimum est de 4 heures (demi-journée) et la durée maximum est de 30 jours. Des tarifs dégressifs s'appliquent pour les locations longue durée."
      }
    ],
    payment: [
      {
        question: "Quels moyens de paiement acceptez-vous ?",
        answer: "Nous acceptons les cartes bancaires (Visa, Mastercard), PayPal, et le paiement mobile (Mobile Money, Orange Money, etc.)."
      },
      {
        question: "Comment fonctionne la caution ?",
        answer: "Une empreinte bancaire est prise lors de la réservation. Elle n'est pas débitée sauf en cas de dommage ou de non-retour du matériel."
      },
      {
        question: "Les prix incluent-ils l'assurance ?",
        answer: "Oui, tous nos prix incluent une assurance couvrant les dommages accidentels, avec une franchise de 50€."
      }
    ],
    technical: [
      {
        question: "Que faire en cas de problème technique ?",
        answer: "Contactez immédiatement notre support via l'application ou au +243 825608939. Nous interviendrons ou remplacerons le matériel dans les 24h."
      },
      {
        question: "Les jeux sont-ils inclus ?",
        answer: "Certaines consoles incluent des jeux préinstallés. Vous pouvez aussi louer des jeux séparément ou utiliser vos propres jeux."
      },
      {
        question: "Comment vérifier l'état du matériel ?",
        answer: "Un état des lieux détaillé est fait avec photos lors de la remise et du retour du matériel, en présence du propriétaire et du locataire."
      }
    ],
    security: [
      {
        question: "Comment sont protégées mes données personnelles ?",
        answer: "Vos données sont cryptées et stockées selon les normes RGPD. Nous ne partageons jamais vos informations avec des tiers sans votre consentement."
      },
      {
        question: "Comment sont vérifiés les utilisateurs ?",
        answer: "Nous vérifions l'identité et le statut étudiant de chaque utilisateur. Un système de notation et d'avis permet aussi d'évaluer la fiabilité."
      },
      {
        question: "Que faire en cas de vol ou perte ?",
        answer: "Contactez immédiatement notre support et déposez une plainte auprès de la police. Notre assurance couvre ces situations selon les conditions générales."
      }
    ]
  };

  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
              Foire Aux Questions
            </h1>

            {/* Barre de recherche */}
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Rechercher une question..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Catégories */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeCategory === category.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Questions/Réponses */}
            <div className="space-y-4">
              {faqs[activeCategory].map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  <summary className="flex justify-between items-center cursor-pointer p-4">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {faq.question}
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>

            {/* Section Contact */}
            <div className="mt-12 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Vous n'avez pas trouvé votre réponse ?</h2>
              <p className="mb-6">
                Notre équipe de support est disponible 7j/7 pour répondre à toutes vos questions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="white"
                  onClick={() => window.location.href = 'mailto:support@locgames.edu'}
                >
                  Contacter le support
                </Button>
                <Button
                  variant="outline-white"
                  onClick={() => navigate('/contact')}
                >
                  Centre d'aide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}