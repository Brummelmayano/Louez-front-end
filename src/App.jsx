// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import { CartProvider } from './context/CartContext';
import ToastContainer from './components/ToastContainer';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import ReservationPage from './pages/ReservationPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HowItWorksPage from './pages/HowItWorksPage';
import ProductsPage from './pages/ProductsPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';
import ReserveCart from './pages/ReserveCart';
import './App.css';
import DashboardPage from './pages/DashboardPage';

export default function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Props communs à passer à chaque page
  const commonProps = { darkMode, toggleDarkMode };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="app-container">
          <ToastContainer />
          <Routes>
            <Route path="/" element={<HomePage {...commonProps} />} />
            <Route path="/products" element={<ProductsPage {...commonProps} />} />
            <Route path="/product/:id" element={<ProductDetail {...commonProps} />} />
            <Route
              path="/reserve/:id"
              element={
                <ProtectedRoute>
                  <ReservationPage {...commonProps} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage {...commonProps} />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<LoginPage {...commonProps} />} />
            <Route path="/signup" element={<SignupPage {...commonProps} />} />
            <Route path="/how-it-works" element={<HowItWorksPage {...commonProps} />} />
            <Route path="/terms" element={<TermsPage {...commonProps} />} />
            <Route path="/privacy" element={<PrivacyPage {...commonProps} />} />
            <Route path="/reserve-cart" element={<ReserveCart />} />
            <Route path="*" element={<NotFoundPage {...commonProps} />} />
            <Route
              path="/dashboard/*"
              element={
                <ProtectedRoute>
                  <DashboardPage {...commonProps} />
                </ProtectedRoute>
              }
            />

          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

