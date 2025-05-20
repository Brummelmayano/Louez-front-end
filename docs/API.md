# Documentation API

## Points de Terminaison

### Authentification

```
POST /auth/login
POST /auth/register
POST /auth/logout
POST /auth/refresh
```

### Produits

```
GET /products
GET /products/:id
POST /products
PUT /products/:id
DELETE /products/:id
```

### Réservations

```
GET /reservations
POST /reservations
GET /reservations/:id
PUT /reservations/:id
DELETE /reservations/:id
```

### Utilisateurs

```
GET /users/me
PUT /users/me
GET /users/:id
PUT /users/:id
```

## Authentification

Toutes les requêtes authentifiées doivent inclure un header Bearer :

```
Authorization: Bearer <token>
```

## Formats de Réponse

### Succès

```json
{
  "data": {},
  "message": "Opération réussie"
}
```

### Erreur

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Description de l'erreur"
  }
}
```

## Pagination

Les endpoints paginés acceptent :

- `page`: numéro de page (défaut: 1)
- `limit`: éléments par page (défaut: 10)

## Rate Limiting

- 100 requêtes/minute pour les endpoints publics
- 1000 requêtes/minute pour les endpoints authentifiés