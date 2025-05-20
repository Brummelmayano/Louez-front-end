# Architecture du système

## Vue d'ensemble

LocGames est une application web React moderne utilisant l'architecture suivante :

### Frontend
- React 19.1.0 avec Hooks
- Vite pour le bundling et le développement
- TailwindCSS pour le styling
- React Router pour la navigation
- React Query pour la gestion des données
- Framer Motion pour les animations

### Backend
- Supabase pour la base de données et l'authentification
- Edge Functions pour la logique métier
- Storage pour les fichiers médias

### État et Gestion des Données
- Context API pour l'état global
- React Query pour le cache et les requêtes
- Local Storage pour la persistance côté client

## Structure du Projet

```
locgames/
├── docs/               # Documentation
├── public/            # Assets statiques
├── src/
│   ├── api/          # Services API
│   ├── components/   # Composants React
│   ├── context/      # Contextes React
│   ├── hooks/        # Hooks personnalisés
│   ├── pages/        # Pages de l'application
│   ├── utils/        # Utilitaires
│   └── main.jsx      # Point d'entrée
└── package.json
```

## Flux de Données

1. Les requêtes utilisateur sont gérées par React Router
2. Les composants utilisent React Query pour les données
3. Les mutations sont envoyées via l'API
4. Supabase gère la persistance et les temps réels

## Sécurité

- Authentification JWT
- Row Level Security (RLS)
- Validation des entrées
- Protection CSRF
- Rate Limiting

## Performance

- Code splitting automatique
- Lazy loading des images
- Mise en cache avec React Query
- Optimisation des assets
- Prefetching intelligent