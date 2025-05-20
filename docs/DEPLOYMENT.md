# Guide de Déploiement

## Prérequis

- Node.js 18+
- npm 9+
- Compte Supabase
- Compte Netlify

## Configuration de l'Environnement

1. Créez un fichier `.env` :

```env
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_clé_anon
VITE_API_URL=votre_url_api
```

2. Installez les dépendances :

```bash
npm install
```

## Build

```bash
npm run build
```

Le build génère les fichiers dans `dist/`.

## Déploiement sur Netlify

1. Connectez votre repo GitHub
2. Configurez les variables d'environnement
3. Déployez avec les paramètres :
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

## Déploiement de Supabase

1. Créez un projet Supabase
2. Appliquez les migrations :
   ```bash
   supabase db push
   ```
3. Configurez les politiques RLS

## Monitoring

- Utilisez Sentry pour le suivi des erreurs
- Configurez les alertes Netlify
- Activez les logs Supabase

## Rollback

En cas de problème :

1. Identifiez la version stable
2. Restaurez le déploiement précédent
3. Vérifiez la base de données
4. Testez les fonctionnalités critiques