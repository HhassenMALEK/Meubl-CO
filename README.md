# projet-collectif-plateforme-de-vente-de-meubles-meubl-co
Création d'un site E-commerce MEUBL&CO : plateforme de vente collaborative de meubles de seconde main. 
Projet en équipe de 6 personnes sur 7 jours.

# DOCUMENTATION POUR LE BACK

I. INSTALLER PHP : https://www.php.net/manual/fr/install.php

Sur MacOs,  et Linux télecharger avec Homebrew https://brew.sh/

II. INSTALLER COMPOSER, ici c'est detaillé pour tous les systemes, il faut faire l'installation GLOBALE (c'est indique sur la doc)

https://getcomposer.org/doc/00-intro.md


III. INSTALLER SYMFONY


https://symfony.com/download 

Debian/Ubuntu — APT based Linux

curl -1sLf 'https://dl.cloudsmith.io/public/symfony/stable/setup.deb.sh' | sudo -E bash
sudo apt install symfony-cli


Pour MacOs

1) Homebrew: install Homebrew https://brew.sh/
2) brew install symfony-cli/tap/symfony-cli

Pour Windows
1) Installer Chocolatey (il faut s'inscire pour le telecharger)https://chocolatey.org/install c'est un gestionnaire de paquets qui va installer Symfony ou scoop, celui cité dans la doc Symfony: Scoop install Scoop
scoop install symfony-cli


Vous pouvez Telecharger PHP STORM si vous voulez comme IDE, vous pouvez avoir la licence gratuite (pack etudiant Jet Brains) avec votre adresse mail de lovelace

IV. TUTOS

OFFICIELLE Symfony (for Dummies) tutos video : https://symfonycasts.com/
On conseille les chapitres 1, 2, 3 et 8

GRAFIKART
https://grafikart.fr/tutoriels/installation-symfony-2180#autoplay
On conseille fortement de gagner du temps, en regardant ces chapitres d'abord
Decouverte
Installation
premieres pages
L ORM doctrine
ORM relation ManyToONe si on veux faire des tables relationnelles
Creer une API : le serializer, et suivre les autres si vous voulez aller plus loin

PROJET

voici la doc officiele
https://symfony.com/doc/current/setup.html



Dans le terminal, va dans le dossier où est le projet, ecris cette ligne de commande :

$ composer require webapp

et verifie que ton environement de travail est pret avec: 

$ symfony check:requirements

ATTENTION le serveur XAMPP, LAMP, WAMP, MAMP doivent etre allumes pour faire tourner la base de donnes, mais il est inutile
de mettre le projet dans htdocs.

ouvrir le projet, et sur le terminal, allumer le serveur

$ symfony server:start


INSTALLER ADMINEREVO pour visualiser les bases de donnees, c'est un gestionnaire de basses de donnes GDBD

en français : https://download.adminerevo.org/4.8.4/adminer/adminer-mysql-fr.zip

une fois téléchargé, le deziper, copier/coller dans  le dossier public du projet,  et le renommer adminer.php  avec l'explorateur de fichiers.


NOTE : pour les problèmes de CORS (multisources otigins), il faut installer le bundle nelmio par comoser tel que :
composer require nelmio/cors-bundle
--> une fois installer s'assurer d'avoir sur votre Symfony votre fichier composer.json la ligne synfony/flex 
  - si oui, votre congiguration avec CORS gérés est fonctionnelle (plus besoin du plugins navigateurs anti-CORS) (documentations: https://github.com/nelmio/NelmioCorsBundle)
  - si non, vous trouvez cette ligne symfony/symfony, vous devez installer symfony/flex tel que : https://symfony.com/doc/current/setup/flex.html (suivre cette documentation)
