# Étape 1 : Utiliser une image Node.js de base
FROM node:16 AS build

# Étape 2 : Définir le répertoire de travail
WORKDIR /app

# Étape 3 : Copier package.json et package-lock.json
COPY package*.json ./

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Ajouter le polyfill crypto-browserify
RUN npm install crypto-browserify

# Étape 6 : Copier le code source de l'application dans le conteneur
COPY . .

# Étape 7 : Construire l'application pour la production
RUN npm run build

# Étape 7.1 : Vérifier le répertoire après la construction
RUN ls -alh /app/dist

# Étape 8 : Utiliser Nginx pour servir l'application
FROM nginx:alpine

# Étape 9 : Copier les fichiers construits dans le dossier Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Étape 10 : Exposer le port 80
EXPOSE 80

# Étape 11 : Démarrer Nginx pour servir l'application
CMD ["nginx", "-g", "daemon off;"]
