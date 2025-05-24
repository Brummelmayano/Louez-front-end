// src/pages/NotFoundPage.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-background dark:bg-gray-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20 bg-light dark:bg-dark min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          404
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Oups ! La page que vous recherchez n’existe pas.
        </p>
        <Button onClick={() => navigate('/')} className="px-6 py-3">
          Retour à l’accueil
        </Button>
      </main>
      <Footer />
    </div>
  );
}
