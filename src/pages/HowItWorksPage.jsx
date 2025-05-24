// src/pages/HowItWorksPage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import ReadyToStart from '../components/ReadyToStart';
import { useNavigate } from 'react-router-dom';

export default function HowItWorksPage({ darkMode, toggleDarkMode }) {
  const navigate = useNavigate();

  // Steps data
  const steps = [
    {
      id: 1,
      title: "Trouvez votre console",
      description: "Parcourez notre sélection de consoles disponibles près de chez vous. Filtrez par type, disponibilité et localisation.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Réservez en quelques clics",
      description: "Sélectionnez vos dates de location et effectuez votre réservation en ligne. Le paiement est sécurisé et simple.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Récupérez votre console",
      description: "Rencontrez le propriétaire au point de rendez-vous convenu et récupérez votre console. Vérifiez ensemble son état.",
      icon: (
        <svg className="w-8 h-8 max-w-[32px] max-h-[32px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Profitez de votre location",
      description: "Jouez autant que vous voulez pendant la durée de votre location. Notre support est disponible 7j/7 en cas de besoin.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Restituez la console",
      description: "Rendez la console au propriétaire à la fin de votre période de location, dans le même état que vous l'avez reçue.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
        </svg>
      )
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "Comment fonctionne le paiement ?",
      answer: "Le paiement s'effectue en ligne lors de la réservation. Nous acceptons les cartes de crédit, PayPal et les virements bancaires. Le montant est débité uniquement lorsque le propriétaire accepte votre demande de réservation."
    },
    {
      question: "Que se passe-t-il en cas de dommage ?",
      answer: "Lors de la remise de la console, vous et le propriétaire vérifiez son état. En cas de dommage pendant la location, notre assurance couvre les réparations, avec une franchise de 50€. Tout incident doit être signalé dans les 24h via l'application."
    },
    {
      question: "Puis-je annuler ma réservation ?",
      answer: "Oui, vous pouvez annuler gratuitement jusqu'à 48h avant le début de la location. Au-delà, des frais d'annulation de 50% s'appliquent. Si le propriétaire annule, vous êtes intégralement remboursé et recevez un coupon de 10% pour votre prochaine location."
    },
    {
      question: "Comment devenir loueur sur Louez ?",
      answer: "C'est simple ! Créez votre compte, complétez votre profil avec vérification d'identité, puis ajoutez vos consoles disponibles à la location. Prenez des photos de qualité, décrivez précisément l'état et les accessoires inclus, et définissez votre tarif journalier."
    },
    {
      question: "La plateforme est-elle sécurisée ?",
      answer: "Absolument. Tous les utilisateurs sont vérifiés, les paiements sont sécurisés, et notre système d'évaluation permet de maintenir un niveau de confiance élevé. De plus, notre assurance couvre les consoles pendant toute la durée de la location."
    }
  ];

  return (
    <div className="bg-background dark:bg-gray-900 min-h-screen flex flex-col">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="pt-20 flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Comment ça marche</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-indigo-100">
              Louez vous permet de louer des consoles de jeux entre étudiants facilement et en toute sécurité.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={() => navigate('/products')}
                size="lg"
                variant="white"
              >
                Voir les consoles disponibles
              </Button>
              <Button 
                onClick={() => navigate('/signup')}
                size="lg"
                variant="outline-white"
              >
                Créer un compte
              </Button>
            </div>
          </div>
        </section>
        
        {/* Steps Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Location en 5 étapes simples
            </h2>
            
            <div className="max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col md:flex-row items-start md:items-center mb-12 last:mb-0">
                  {/* Step number and connector line */}
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white text-xl font-bold">
                      {step.id}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-1 bg-gradient-to-b from-indigo-600 to-violet-600 h-24 my-2 hidden md:block"></div>
                    )}
                  </div>
                  
                  {/* Step content */}
                  <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md">
                    <div className="flex items-start">
                      <div className="mr-4 text-indigo-600 dark:text-indigo-400">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Pourquoi choisir Louez ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Économique</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Louez pour une fraction du prix d'achat. Les propriétaires fixent des tarifs abordables pour les étudiants.
                </p>
              </div>
              
              {/* Benefit 2 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Sécurisé</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Profils vérifiés, système d'évaluation et assurance incluse pour une tranquillité d'esprit totale.
                </p>
              </div>
              
              {/* Benefit 3 */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Communautaire</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Rencontrez d'autres gamers de votre campus et partagez votre passion pour les jeux vidéo.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Questions fréquentes
            </h2>
            
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <details 
                  key={index} 
                  className="mb-4 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden"
                >
                  <summary className="p-4 font-medium cursor-pointer text-gray-900 dark:text-white flex justify-between items-center">
                    {faq.question}
                    <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="p-4 pt-0 text-gray-600 dark:text-gray-300">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
      </main>
      <ReadyToStart />
      <Footer />
    </div>
  );
}

