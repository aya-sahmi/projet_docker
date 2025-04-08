
# Gestion de Cours en Ligne

## Présentation du projet

L'application **Gestion de Cours en Ligne** permet de gérer des cours en ligne avec des vidéos. Les cours peuvent être ajoutés, modifiés, et affichés via une interface web construite avec **React.js**. Le backend, développé avec **Express.js**, fournit des API RESTful pour gérer les données des cours et interagir avec la base de données. L'application est conteneurisée avec **Docker** pour simplifier le déploiement et garantir un environnement de développement cohérent.

### Fonctionnalités :
- Gestion des cours et professeurs (ajout, suppression, affichage)
- Interface utilisateur pour l'affichage des cours
- API pour la gestion des cours via le backend Express.js

## Technologies utilisées

- **Backend** : Express.js (Node.js)
- **Frontend** : React.js
- **Conteneurisation** : Docker
- **Base de données** : Mysql

## Instructions de build et d’exécution locale

### Prérequis
Avant de commencer, assurez-vous d'avoir installé **Docker** et **Docker Compose** sur votre machine.

### Étapes pour cloner et exécuter le projet localement :

1. Clonez le dépôt du projet :
   ```
   git clone https://github.com/aya-sahmi/projet_docker
   cd projet_docker
   ```

2. Construisez l'image Docker pour le projet :
   Partie frontend  
   ```
   docker build -t ayasahmi/frontend .
   ```
   Partie backend  
   ```
   docker build -t ayasahmi/backend .
   ```

3. Exécutez le backend :
   ```
   docker run -p 5000:5000 ayasahmi/docker-backend
   ```

4. Exécutez le frontend :
   ```
   docker run -p 3000:3000 ayasahmi/docker-frontend
   ```

5. Accédez à l'application :
   - Le **backend** est accessible à l'adresse [http://localhost:5000](http://localhost:5000)
   - Le **frontend** est accessible à l'adresse [http://localhost:3000](http://localhost:3000)

## Lien vers l’image Docker (Docker Hub)

L'image Docker du projet a été publiée sur Docker Hub pour faciliter le déploiement. Vous pouvez la récupérer avec la commande suivante :
Partie frontend  
```
docker pull ayasahmi/docker-frontend
```
Partie backend  
```
docker pull ayasahmi/docker-backend
```

## Commandes utiles

Voici quelques commandes utiles pour travailler avec le projet :

- **Construire l'image Docker du backend** :
   ```
   docker build -t ayasahmi/docker-backend .
   ```
- **Construire l'image Docker du backend** :
   ```
   docker build -t ayasahmi/docker-frontend .
   ```

- **Exécuter le backend** :
   ```
   docker run -p 5000:5000 ayasahmi/docker-backend
   ```

- **Exécuter le frontend** :
   ```
   docker run -p 3000:3000 ayasahmi/docker-frontend
   ```

---

## Auteur(s)

- **Nom de l'auteur** : Sahmi Lamrani Aya Kader Zoubida  

---
