# Plateforme de Vente de Meubles

Bienvenue sur la plateforme de vente de meubles, un projet conçu avec Symfony pour le back-end et React pour le front-end. Cette application permet aux utilisateurs de parcourir, rechercher et acheter des meubles via une interface moderne et réactive.

## Fonctionnalités

- 🛋️ **Navigation et recherche de meubles**

## Technologies Utilisées

- **Back-end** : Symfony
- **Front-end** : React
- **Base de données** : MySQL
- **Autres** : Apache, phpMyAdmin, Composer, Node.js, NPM

## Communication entre Technologies

- **API RESTful** : Symfony expose des endpoints API RESTful permettant au front-end de communiquer avec le back-end pour les opérations CRUD.
- **Base de données** : MySQL stocke les données de manière structurée.
- **Gestion des dépendances** : Composer gère les dépendances PHP, tandis que Node.js et NPM gèrent les bibliothèques JavaScript.


## Configuration Mise en Place

Pour configurer l'environnement de développement, voici les étapes que j'ai mises en place :

1. **Installation d'Apache** : Le serveur web Apache a été configuré pour gérer les requêtes HTTP de l'application.
2. **Installation de MySQL** : MySQL a été installé pour gérer les données de manière structurée.
3. **phpMyAdmin** : J'ai ensuite installé phpMyAdmin pour permettre la gestion des bases de données via une interface web plus intuitive.
4. **Installation de PHP** : PHP et ses extensions, notamment php-mysql, ont été installés pour garantir la compatibilité avec Symfony.
5. **Installation de Composer** : J'ai installé Composer pour gérer les dépendances PHP et faciliter le téléchargement des bibliothèques nécessaires.
6. **Installation de Symfony** : Symfony a été installé en tant que framework principal pour le développement du back-end de l'application.
7. **Installation de Node.js et NPM** : Pour gérer les dépendances front-end, j'ai installé Node.js et NPM afin de prendre en charge le développement en React.
8. **Création du projet Symfony** : J'ai initialisé le projet Symfony et configuré le répertoire du projet pour le développement.

### Architecture et Communication entre les Technologies

Symfony a été utilisé comme framework backend pour gérer la logique côté serveur, simplifiant ainsi la gestion des données en utilisant des objets PHP. Des entités ont été créées en PHP pour représenter les données et leurs relations, et Symfony a utilisé ces entités pour générer automatiquement la structure de la base de données. 

Pour permettre à ReactJS de récupérer ces données, Symfony a exposé une API via des endpoints spécifiques (URLs) configurés pour répondre à différentes actions, telles que la récupération de la liste des produits. Dans ReactJS, l'API Fetch a été employée pour envoyer des requêtes HTTP vers ces endpoints Symfony. Les données JSON renvoyées par Symfony ont ensuite été traitées et affichées dynamiquement dans l'interface utilisateur de ReactJS.

Pour la partie frontend, l'interface dynamique a été conçue en utilisant React pour développer des composants interactifs. Les routes ont été mises en place pour faciliter la navigation entre les différentes pages de l'application. Bootstrap a été intégré afin d'assurer un design attractif.


