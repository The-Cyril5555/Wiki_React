# web-app

Il s'agit d'une application web construite avec Node.js et Express.

## Pour commencer

Pour commencer, clonez ce dépôt et installez les dépendances en exécutant `npm install`.

## Scripts disponibles

Dans le répertoire du projet, vous pouvez exécuter :

### `npm start`

Lance l'application en mode production. Ouvrez [http://localhost:4000](http://localhost:4000) pour la voir dans le navigateur.

### `npm run dev`

Lance l'application en mode développement avec nodemon. Ouvrez [http://localhost:4000](http://localhost:4000) pour la voir dans le navigateur.

### `npm run lint`

Exécute ESLint sur tous les fichiers JavaScript et corrige automatiquement les problèmes qui peuvent être corrigés.

## Technologie

Ce projet utilise les technologie suivantes :
- Express js pour l'api
- Mysql pour la base de données
- eslint pour vérifier la qualité du code et s’assurer qu’il respecte certaines règles de codage

## Docker
```
docker-compose build
docker-compose up
```