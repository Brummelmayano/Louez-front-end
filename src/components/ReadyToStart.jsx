import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

export default function ReadyToStart() {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="bg-indigo-600 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Prêt à jouer ?
              </h2>
              <p className="text-indigo-100 mb-0">
                Rejoignez des milliers d'étudiants qui profitent déjà de nos consoles de jeux à prix abordables.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="secondary"
                onClick={() => navigate('/signup')}
                className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-lg font-medium transition-colors"
              >
                S'inscrire maintenant
              </Button>
              <Button
                onClick={() => navigate('/how-it-works')}
                className="border border-white text-white hover:bg-indigo-700 px-6 py-3 rounded-lg font-medium transition-colors text-center"
              >
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}