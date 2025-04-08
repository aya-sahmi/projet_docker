# Étape 1 : Utiliser une image Node.js de base
FROM node:14

# Étape 2 : Définir le répertoire de travail
WORKDIR /app

# Étape 3 : Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Copier le code source de l'application dans le conteneur
COPY . .

# Étape 6 : Exposer le port utilisé par l'application
EXPOSE 5000

# Étape 7 : Démarrer l'application
CMD ["node", "index.js"]
