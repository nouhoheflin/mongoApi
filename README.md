README - Gestion des Tâches avec Express et MongoDB

Description
Ce projet est une API simple de gestion des tâches utilisant Express.js et MongoDB. Il permet d'ajouter, lire, modifier et supprimer des tâches via des requêtes HTTP.

Prérequis
Avant de commencer, assurez-vous d'avoir installé les éléments suivants :
- Node.js
- MongoDB

Installation
1. Clonez ce dépôt :
   ```sh
   git clone git@github.com:nouhoheflin/mongoApi.git
   
2. Accédez au dossier du projet :
   ```sh
   cd nom-du-projet(Ex: server.js)
   ```
3. Installez les dépendances :
   ```sh
   npm install express mongoose cors
   ```

Utilisation
1. Assurez-vous que MongoDB est en cours d'exécution.
2. Lancez le serveur :
   ```sh
   node server.js
   ```
3. L'API sera accessible à l'adresse :
   ```sh
   http://localhost:3000
MongoDB connecté
   ```

Routes API
Ajouter une tâche
- POST `/tasks`
- Corps de la requête : `{ "title": "Nom de la tâche" }`

Récupérer toutes les tâches
- GET `/tasks`

Récupérer une tâche spécifique
- GET `/tasks/:id`
vous remplacez juste :id par l'id generée par MongoDB
Modifier une tâche
- PUT `/tasks/:id`
- Corps de la requête : `{ "title": "Nouveau nom de la tâche" }`

Supprimer une tâche
- DELETE `/tasks/:id`

Auteur
Projet développé par COSME
