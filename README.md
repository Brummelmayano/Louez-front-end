# Louez Frontend

Application React + Vite + Tailwind CSS pour la location de consoles de jeux vidéo entre étudiants.

---

## Sommaire

- [Présentation](#présentation)
- [Fonctionnalités](#fonctionnalités)
- [Architecture du projet](#architecture-du-projet)
- [Installation](#installation)
- [Configuration de l'environnement](#configuration-de-lenvironnement)
- [Lancement du projet](#lancement-du-projet)
- [Scripts disponibles](#scripts-disponibles)
- [Déploiement](#déploiement)
- [Structure des dossiers](#structure-des-dossiers)
- [Technologies utilisées](#technologies-utilisées)
- [Contribuer](#contribuer)
- [Documentation](#documentation)
- [Support](#support)

---

## Présentation

**Louez** est une plateforme web permettant aux étudiants de louer et réserver des consoles de jeux vidéo en toute simplicité. L'application propose une expérience moderne, rapide et sécurisée, avec gestion du panier, réservation, paiement, profil utilisateur, avis, et bien plus.

---

## Fonctionnalités

- Recherche et filtrage de consoles disponibles
- Consultation des fiches produits détaillées
- Réservation immédiate ou via le panier
- Paiement sécurisé (mobile money, à la livraison, etc.)
- Gestion du profil utilisateur et des réservations
- Système d’avis et de notation
- Mode sombre/claire
- Accessibilité et responsive design
- Support et FAQ intégrés

---

## Architecture du projet

Le projet suit une architecture modulaire :

- **React** pour la structure des composants et la gestion de l’état
- **Vite** pour le bundling et le développement rapide
- **Tailwind CSS** pour le style
- **React Router** pour la navigation
- **Context API** pour la gestion du panier et de l’authentification
- **Axios** pour les appels API
- **Supabase** côté backend (voir docs séparées)

---

## Installation

1. **Cloner le dépôt**

```bash
git clone https://github.com/Brummelmayano/Louez-front-end
cd Louez-frontend
```

2. **Installer les dépendances**

```bash
npm install
```

---

## Configuration de l'environnement

Créez un fichier `.env` à la racine du projet avec les variables suivantes :

```env
VITE_API_URL=https://votre-backend-api
VITE_APP_BACK_END_URL=https://votre-backend-api
```

Adaptez les URLs à votre environnement.

---

## Lancement du projet

Pour démarrer le serveur de développement :

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:5173](http://localhost:5173).

---

## Scripts disponibles

- `npm run dev` : Démarre le serveur de développement
- `npm run build` : Génère le build de production dans le dossier `dist/`
- `npm run preview` : Lance un serveur local pour prévisualiser le build
- `npm run lint` : Analyse le code avec ESLint

---

## Déploiement

Le projet peut être déployé sur Netlify, Vercel ou tout hébergeur statique compatible.

### Déploiement sur Netlify

1. Connectez votre dépôt GitHub à Netlify
2. Configurez les variables d’environnement dans l’interface Netlify
3. Utilisez les paramètres suivants :
   - Build command : `npm run build`
   - Publish directory : `dist`
   - Node version : 18+

Voir [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) pour plus de détails.

---

## Structure des dossiers

```
Louez-frontend/
├── public/                # Fichiers statiques
├── src/
│   ├── api/               # Services API (Axios)
│   ├── assets/            # Images et icônes
│   ├── components/        # Composants réutilisables
│   ├── context/           # Contextes React (panier, auth)
│   ├── hooks/             # Hooks personnalisés
│   ├── pages/             # Pages principales (Home, Products, etc.)
│   ├── router/            # Configuration du routing
│   ├── styles/            # Fichiers CSS globaux
│   ├── utils/             # Fonctions utilitaires
│   ├── App.jsx            # Composant racine
│   ├── main.jsx           # Point d'entrée
│   └── index.css          # CSS principal (inclut Tailwind)
├── .env                   # Variables d'environnement
├── tailwind.config.js     # Config Tailwind CSS
├── vite.config.js         # Config Vite
├── package.json           # Dépendances et scripts
├── README.md              # Ce fichier
└── docs/                  # Documentation technique
```

---

## Technologies utilisées

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Supabase](https://supabase.com/)
- [ESLint](https://eslint.org/)

---

## Contribuer

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/ma-fonctionnalite`)
3. Commitez vos modifications (`git commit -am 'Ajout d’une fonctionnalité'`)
4. Poussez la branche (`git push origin feature/ma-fonctionnalite`)
5. Ouvrez une Pull Request

Merci de lire [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) avant toute contribution majeure.

---

## Documentation

- [docs/API.md](docs/API.md) : Endpoints et exemples d’appels API
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) : Architecture technique
- [docs/DATABASE.md](docs/DATABASE.md) : Schéma de la base de données
- [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) : Guide de déploiement

---

## Support

Pour toute question ou bug, ouvrez une issue sur GitHub ou contactez l’équipe à [support@Louez.com](mailto:support@Louez.com).

---

© Louez 2025. Tous droits réservés.
