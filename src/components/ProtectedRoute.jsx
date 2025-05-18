import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="pt-20 text-center">Chargement…</div>;
  }

  if (!user) {
    // On garde la page d’origine pour rediriger après login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}