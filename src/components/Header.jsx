import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';

export default function Header({ darkMode, toggleDarkMode }) {
  const { user, loading, logout } = useAuth();
  const isAuthenticated = !!user && !loading;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate();

  // Detect scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Nombre total d'articles dans le panier
  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="container-custom py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Louez</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate('/')}
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => navigate('/products')}
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
            >
              Consoles
            </button>
            <button
              onClick={() => navigate('/how-it-works')}
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
            >
              Comment ça marche
            </button>
          </nav>

          {/* Auth, Panier & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Panier */}
            <button
              onClick={() => setCartOpen(open => !open)}
              className={`relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors border-2 border-indigo-500`}
              aria-label="Voir le panier"
            >
              {/* Icône panier plus classique */}
              <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.334 16h9.332c.828 0 1.553-.5 1.847-1.267l3.333-8A1 1 0 0 0 21 5H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44A2 2 0 0 0 5 17a1 1 0 0 0 1 1h12v-2H7.42a.25.25 0 0 1-.24-.17l.94-1.83h8.45a1 1 0 0 0 .95-.68l1.1-3H7.334z"/>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5 font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

            {/* Theme Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none"
              aria-label={darkMode ? "Passer au mode clair" : "Passer au mode sombre"}
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <button
                    onClick={() => navigate('/profile')}
                    className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white font-medium">
                      {user.username ? user.username.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-200">{user.username}</span>
                  </button>
                </div>
                <button
                  onClick={logout}
                  className="text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400 font-medium transition-colors"
                >
                  Déconnexion
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigate('/login')}
                  className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                >
                  Connexion
                </button>
                <button
                  onClick={() => navigate('/signup')}
                  className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-5 py-2 rounded-md font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5"
                >
                  Inscription
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Panier Mobile */}
            <button
              onClick={() => setCartOpen(open => !open)}
              className={`relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors border-2 border-indigo-500`}
              aria-label="Voir le panier"
            >
              {/* Icône panier plus classique */}
              <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.334 16h9.332c.828 0 1.553-.5 1.847-1.267l3.333-8A1 1 0 0 0 21 5H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44A2 2 0 0 0 5 17a1 1 0 0 0 1 1h12v-2H7.42a.25.25 0 0 1-.24-.17l.94-1.83h8.45a1 1 0 0 0 .95-.68l1.1-3H7.334z"/>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5 font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />

            {/* Theme Toggle - Mobile */}
            <button 
              onClick={toggleDarkMode}
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none"
              aria-label={darkMode ? "Passer au mode clair" : "Passer au mode sombre"}
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 dark:text-gray-200 focus:outline-none"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>


        {/* Mobile Menu */}
        <div className={`md:hidden bg-white dark:bg-gray-900 overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96 border-t border-gray-200 dark:border-gray-700 shadow-lg' : 'max-h-0'
        }`}>
          <div className="container-custom py-4 space-y-4">
            <button
              onClick={() => {
                navigate('/');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => {
                navigate('/products');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
            >
              Consoles
            </button>
            <button
              onClick={() => {
                navigate('/how-it-works');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
            >
              Comment ça marche
            </button>

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              {isAuthenticated ? (
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      navigate('/profile');
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center space-x-2 w-full text-left py-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 flex items-center justify-center text-white font-medium">
                      {user.username ? user.username.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-200">{user.username}</span>
                  </button>
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left py-2 text-red-600 dark:text-red-400 font-medium transition-colors"
                  >
                    Déconnexion
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <button
                    onClick={() => {
                      navigate('/login');
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-left py-2 text-indigo-600 dark:text-indigo-400 font-medium transition-colors"
                  >
                    Connexion
                  </button>
                  <button
                    onClick={() => {
                      navigate('/signup');
                      setMobileMenuOpen(false);
                    }}
                    className="block w-full text-center py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-md font-medium"
                  >
                    Inscription
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

