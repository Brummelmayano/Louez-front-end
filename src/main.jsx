// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <-- Ajoute ceci
import App from './App.jsx';
import './index.css';

const container = document.getElementById('root');
if (!container) throw new Error('#root introuvable dans index.html');

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

