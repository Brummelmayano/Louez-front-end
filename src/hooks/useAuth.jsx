// src/hooks/useAuth.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Vérifie le token au chargement
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      api.get('/users/users/me/')
        .then(res => {
          setUser(res.data);
          localStorage.setItem('user', JSON.stringify(res.data));
        })
        .catch(() => {
          logout(); // Token invalide ou expiré
        })
        .finally(() => setLoading(false));
    } else {
      logout();
      setLoading(false);
    }
  }, []);

  // Intercepteur global pour gérer les 401
  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      response => response,
      error => {
        if (error.response && error.response.status === 401) {
          logout();
        }
        return Promise.reject(error);
      }
    );
    return () => api.interceptors.response.eject(interceptor);
  }, []);

  // Connexion
  const login = async (credentials) => {
    const { data } = await api.post('/token/', credentials);
    localStorage.setItem('token', data.access);
    api.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;
    // Optionnel : refresh token
    if (data.refresh) localStorage.setItem('refresh', data.refresh);
    const profile = await api.get('/users/users/me/');
    setUser(profile.data);
    localStorage.setItem('user', JSON.stringify(profile.data));
    return profile.data;
  };

  // Déconnexion
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');
    localStorage.removeItem('user');
    delete api.defaults.headers.common['Authorization'];
    setUser(null);
  };

  // Rafraîchir le token (si backend le permet)
  const refreshToken = async () => {
    const refresh = localStorage.getItem('refresh');
    if (!refresh) return logout();
    try {
      const { data } = await api.post('/token/refresh/', { refresh });
      localStorage.setItem('token', data.access);
      api.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;
      return true;
    } catch {
      logout();
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, refreshToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
