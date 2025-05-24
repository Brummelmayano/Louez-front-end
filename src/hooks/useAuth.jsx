// src/hooks/useAuth.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Recharge l'utilisateur connecté à partir du token au chargement de l'app
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.get('/users/users/me/')
        .then(res => {
          setUser(res.data);
          localStorage.setItem('user', JSON.stringify(res.data));
        })
        .catch(() => {
          logout();
        })
        .finally(() => setLoading(false));
    } else {
      logout();
      setLoading(false);
    }
    // eslint-disable-next-line
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

  // Connexion classique (formulaire)
  const login = async (credentials) => {
    const { data } = await api.post('/auth/login/', credentials);
    localStorage.setItem('token', data.key);
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
    setUser(null);
  };

  // Rafraîchir le token (non utilisé avec authtoken)
  const refreshToken = async () => {
    logout();
    return false;
  };

  // Inscription manuelle corrigée pour dj-rest-auth
  const register = async (data) => {
    const response = await api.post('/auth/registration/', {
      username: data.username,
      email: data.email,
      password1: data.password1, // doit correspondre à password1 du formulaire
      password2: data.password2, // doit correspondre à password2 du formulaire
      first_name: data.firstName,
      last_name: data.lastName,
      post_name: data.postName,
    });
    if (response.data.key) {
      localStorage.setItem('token', response.data.key);
      const profile = await api.get('/users/users/me/');
      setUser(profile.data);
      localStorage.setItem('user', JSON.stringify(profile.data));
    }
    return response.data;
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, refreshToken, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
