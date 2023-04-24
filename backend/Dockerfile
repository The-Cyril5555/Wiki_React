# Utiliser une image Node.js comme image de base
FROM node:14

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port 3000
EXPOSE 4000

# Démarrer l'API Express.js
CMD [ "node", "src/server.js" ]