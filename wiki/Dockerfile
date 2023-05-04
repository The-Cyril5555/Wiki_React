# Étape 1 : Créer une image à partir de l'image node
FROM node:latest as build

# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le code source de l'application
COPY . .

# Construire l'application React
RUN npm run build

# Étape 2 : Créer une image à partir de l'image nginx
FROM nginx:latest

# Copier les fichiers d'application buildés à partir de l'étape de construction précédente
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80 pour accéder à l'application
EXPOSE 80

# Démarrer nginx pour servir l'application
CMD ["nginx", "-g", "daemon off;"]