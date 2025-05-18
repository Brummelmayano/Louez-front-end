// src/pages/LoginPage.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Input from '../components/Input';
import { useNavigate, useLocation } from 'react-router-dom';

export default function LoginPage({ darkMode, toggleDarkMode }) {
  const { login, user } = useAuth();
  const [cred, setCred] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Récupère la page d'origine ou "/" par défaut
  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const handleSubmit = async e => {
    e.preventDefault();
    setError(null);
    if (!cred.username || !cred.password) {
      setError('Veuillez remplir tous les champs');
      return;
    }
    setLoading(true);
    try {
      await login(cred, rememberMe);
      window.dispatchEvent(new CustomEvent('toast', {
        detail: {
          type: 'success',
          message: 'Connexion réussie ! Bienvenue sur LocGames.',
          duration: 3000
        }
      }));
      // La redirection sera gérée par le useEffect ci-dessus
    } catch (err) {
      console.error('Login error:', err);
      setError(
        err.response?.data?.message ||
        'Échec de la connexion. Veuillez vérifier vos identifiants.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Connexion</h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Accédez à votre compte LocGames
                </p>
              </div>
              {error && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 text-red-700 dark:text-red-400">
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    {error}
                  </p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Nom d'utilisateur ou email"
                  id="username"
                  name="username"
                  value={cred.username}
                  onChange={e => setCred({ ...cred, username: e.target.value })}
                  required
                  icon={
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  }
                />
                <Input
                  label="Mot de passe"
                  type="password"
                  id="password"
                  name="password"
                  value={cred.password}
                  onChange={e => setCred({ ...cred, password: e.target.value })}
                  required
                  icon={
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  }
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={e => setRememberMe(e.target.checked)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                      Se souvenir de moi
                    </label>
                  </div>
                  <div className="text-sm">
                    <button
                      type="button"
                      onClick={() => navigate('/forgot-password')}
                      className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Mot de passe oublié ?
                    </button>
                  </div>
                </div>
                <div>
                  <Button
                    type="submit"
                    fullWidth
                    size="lg"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Connexion en cours...
                      </div>
                    ) : (
                      'Se connecter'
                    )}
                  </Button>
                </div>
              </form>
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                      Ou continuer avec
                    </span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {/* ...boutons Google/Facebook... */}
                </div>
              </div>
              <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                Pas encore de compte ?{' '}
                <button
                  type="button"
                  onClick={() => navigate('/signup')}
                  className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Créer un compte
                </button>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
