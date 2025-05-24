// src/router/AppRouter.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import HomePage from '../pages/HomePage';
import ProductDetail from '../pages/ProductDetail';
import ReservationPage from '../pages/ReservationPage';
import ProfilePage from '../pages/ProfilePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import HowItWorksPage from '../pages/HowItWorksPage';
import ProductsPage from '../pages/ProductsPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';
import NotFoundPage from '../pages/NotFoundPage';
import LoadingScreen from '../components/LoadingScreen';
import ToastContainer from '../components/ToastContainer';

export default function AppRouter() {
  // view : 'home' | 'product' | 'products' | 'reserve' | 'profile' | 'login' | 'signup' | 'how-it-works' | 'terms' | 'privacy'
  const [view, setView] = useState('home');
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or user preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  
  const { checkAuth } = useAuth();

  // Initialize auth state and theme
  useEffect(() => {
    const initApp = async () => {
      try {
        await checkAuth();
      } catch (error) {
        console.error('Auth check failed:', error);
      } finally {
        setLoading(false);
      }
    };

    initApp();
  }, [checkAuth]);

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const navigate = (to, data = null) => {
    // Scroll to top on navigation
    window.scrollTo(0, 0);
    
    setPayload(data);
    setView(to);
    
    // Update page title based on view
    const titles = {
      'home': 'Louez - Location de consoles entre étudiants',
      'product': data?.name ? `${data.name} - Louez` : 'Détail du produit - Louez',
      'products': 'Toutes nos consoles - Louez',
      'reserve': 'Réservation - Louez',
      'profile': 'Mon profil - Louez',
      'login': 'Connexion - Louez',
      'signup': 'Inscription - Louez',
      'how-it-works': 'Comment ça marche - Louez',
      'terms': 'Conditions générales - Louez',
      'privacy': 'Politique de confidentialité - Louez',
    };
    
    document.title = titles[to] || 'Louez';
  };

  if (loading) {
    return <LoadingScreen />;
  }

  // Common props for all pages
  const commonProps = {
    onNavigate: navigate,
    darkMode,
    toggleDarkMode
  };

  // Render the appropriate component based on the current view
  const renderView = () => {
    switch (view) {
      case 'product':
        return <ProductDetail product={payload} {...commonProps} />;
      case 'products':
        return <ProductsPage filters={payload} {...commonProps} />;
      case 'reserve':
        return <ReservationPage product={payload} {...commonProps} />;
      case 'profile':
        return <ProfilePage {...commonProps} />;
      case 'login':
        return <LoginPage {...commonProps} />;
      case 'signup':
        return <SignupPage {...commonProps} />;
      case 'how-it-works':
        return <HowItWorksPage {...commonProps} />;
      case 'terms':
        return <TermsPage {...commonProps} />;
      case 'privacy':
        return <PrivacyPage {...commonProps} />;
      case 'home':
        return <HomePage {...commonProps} />;
      default:
        return <NotFoundPage {...commonProps} />;
    }
  };

  return (
    <div className="app-container bg-light dark:bg-dark min-h-screen flex flex-col transition-colors duration-300">
      {renderView()}
      <ToastContainer position="bottom-right" />
    </div>
  );
}




