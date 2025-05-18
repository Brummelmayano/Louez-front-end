// src/pages/SignupPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Input from '../components/Input';
import { GoogleLogo, FacebookLogo } from 'phosphor-react';

export default function SignupPage({ darkMode, toggleDarkMode }) {
  const { register, user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    postName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Le prénom est requis";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Le nom est requis";
    }
    if (!formData.postName.trim()) {
      newErrors.postName = "Le post-nom est requis";
    }
    if (!formData.username.trim()) {
      newErrors.username = "Le nom d'utilisateur est requis";
    } else if (formData.username.length < 3) {
      newErrors.username = "Le nom d'utilisateur doit contenir au moins 3 caractères";
    }
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }
    if (!formData.password) {
      newErrors.password = "Le mot de passe est requis";
    } else if (formData.password.length < 8) {
      newErrors.password = "Le mot de passe doit contenir au moins 8 caractères";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "Vous devez accepter les conditions générales";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    if (errors[name]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await register({
        username: formData.username,
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        postName: formData.postName
      });
      window.dispatchEvent(new CustomEvent('toast', {
        detail: { type: 'success', message: 'Inscription réussie ! Bienvenue sur LocGames.', duration: 3000 }
      }));
      navigate('/');
    } catch (err) {
      if (err.response?.data?.errors) {
        const apiErrors = {};
        Object.entries(err.response.data.errors).forEach(([key, value]) => {
          apiErrors[key] = Array.isArray(value) ? value[0] : value;
        });
        setErrors(apiErrors);
      } else {
        setErrors({ general: err.response?.data?.message || "Une erreur est survenue lors de l'inscription" });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleTermsClick = () => navigate('/terms');
  const handlePrivacyClick = () => navigate('/privacy');
  const handleSocialSignup = (provider) => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/${provider}/login/`;
  };

  return (
    <>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow flex items-center justify-center bg-background py-16 px-4">
        <div className="w-full max-w-lg">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-102 transition-transform duration-300">
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">
                  Créez votre compte
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Rejoignez la communauté LocGames
                </p>
              </div>

              {errors.general && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/20 border-l-4 border-red-500 text-red-700 dark:text-red-300 rounded-md">
                  {errors.general}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Prénom"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    error={errors.firstName}
                  />
                  <Input
                    label="Nom"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    error={errors.lastName}
                  />
                </div>
                <Input
                  label="Post-nom"
                  id="postName"
                  name="postName"
                  value={formData.postName}
                  onChange={handleChange}
                  required
                  error={errors.postName}
                />
                <Input
                  label="Nom d'utilisateur"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  error={errors.username}
                  icon={
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  }
                />
                <Input
                  label="Email"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  error={errors.email}
                  icon={
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Mot de passe"
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    error={errors.password}
                    helperText="8 caractères minimum"
                    icon={
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    }
                  />
                  <Input
                    label="Confirmer le mot de passe"
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    error={errors.confirmPassword}
                    icon={
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    }
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="acceptTerms"
                      name="acceptTerms"
                      type="checkbox"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="acceptTerms" className="text-gray-700 dark:text-gray-300">
                      J'accepte les{' '}
                      <button
                        type="button"
                        onClick={handleTermsClick}
                        className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
                      >
                        conditions générales
                      </button>
                      {' '}et la{' '}
                      <button
                        type="button"
                        onClick={handlePrivacyClick}
                        className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
                      >
                        politique de confidentialité
                      </button>
                    </label>
                    {errors.acceptTerms && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-500">{errors.acceptTerms}</p>
                    )}
                  </div>
                </div>
                <Button
                  type="submit"
                  fullWidth
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd text-white font-semibold rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                >
                  {loading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="animate-spin -ml-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Inscription...</span>
                    </div>
                  ) : (
                    "S'inscrire"
                  )}
                </Button>
              </form>

              <div className="mt-8">
                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                      Ou s'inscrire avec
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleSocialSignup('google')}
                    className="flex items-center justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                  >
                    <GoogleLogo size={20} weight="bold" className="text-red-500" />
                    <span className="ml-2 font-medium">Google</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleSocialSignup('facebook')}
                    className="flex items-center justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                  >
                    <FacebookLogo size={20} weight="bold" className="text-blue-600" />
                    <span className="ml-2 font-medium">Facebook</span>
                  </button>
                </div>
              </div>

              <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                Déjà un compte ?{' '}
                <button
                  type="button"
                  onClick={() => navigate('/login')}
                  className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Se connecter
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
