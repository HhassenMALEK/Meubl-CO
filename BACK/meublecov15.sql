-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : jeu. 04 juil. 2024 à 10:27
-- Version du serveur : 5.7.39
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `meubleco`
--

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20240627114726', '2024-06-27 11:53:37', 66),
('DoctrineMigrations\\Version20240628092530', '2024-06-28 09:26:21', 118);

-- --------------------------------------------------------

--
-- Structure de la table `messenger_messages`
--

CREATE TABLE `messenger_messages` (
  `id` bigint(20) NOT NULL,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `headers` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `available_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `delivered_at` datetime DEFAULT NULL COMMENT '(DC2Type:datetime_immutable)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `meuble_eco`
--

CREATE TABLE `meuble_eco` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `material` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `color` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `width` int(11) NOT NULL,
  `height` int(11) NOT NULL,
  `depth` int(11) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `picturl` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `meuble_eco`
--

INSERT INTO `meuble_eco` (`id`, `name`, `category`, `material`, `color`, `width`, `height`, `depth`, `description`, `price`, `picturl`, `status`) VALUES
(1, 'Canapé 3 places', 'Canapes', 'Simili cuir', 'Marron', 130, 80, 70, 'Joli canapé et très confortable.', '130.00', './img/canap01.jpg', 'Comme neuf'),
(2, 'Table basse moche', 'Tables', 'Verre', 'Transparent', 100, 50, 60, 'Table basse en verre qui fait mal au genou quand on se cogne.', '30.00', './img/table_basse01.jpg', 'Pourri-e-s'),
(3, 'Armoire blanche design', 'Rangements', 'Bois', 'Blanc', 80, 170, 50, 'Armoire de chambre plutôt charmante', '230.00', './img/armoire01.jpg', 'Comme neuf'),
(4, 'Tabouret rose', 'Chaises', 'Plastique', 'Rose', 29, 81, 28, 'Jolie tabouret rose (volé chez Ada Tech School de Nants, maus chuuuuut...)', '132.00', './img/chaise03.jpg', 'Usagé-e-s mais ça va quand même'),
(5, 'Chaise rouge transluside', 'Chaises', 'Plastique, Métal', 'Rouge', 50, 75, 60, 'Chaise de bureau rouge qu\'elle est bien qu\'on voit au travers.', '55.00', './img/chaise01.jpg', 'Bien mais pas top'),
(6, 'Ballon d\'assise', 'Chaises', 'Plastique', 'Rose', 100, 100, 100, 'Ballon pour que ton petit derrière soit confortablement installé.', '32.00', './img/chaise02.jpg', 'Usagé-e-s mais ça va quand même'),
(7, 'Machine à café à grain', 'Divers', 'Electronique', 'Noir', 30, 40, 52, 'Une machine à café à grain qui fonctionne encore.', '112.00', './img/divers01.jpg', 'Pourri-e-s'),
(8, 'Miroir de salle de bain', 'Decoration', 'Verre', 'Gris', 120, 120, 10, 'Un miroir avec des gens trop cools qui se reflètent', '768.00', './img/decoration01.jpg', 'Comme neuf'),
(9, 'Trottinette électrique', 'Divers', 'Electronique', 'Noir', 130, 70, 20, 'Une trottinette n\'ayant pas beaucoup servie et qui ne nous appartient même pas - mais c\'est pas grave, on la vend quand même.', '2.00', './img/divers02.jpg', 'Bien mais pas top'),
(10, 'WC', 'Decoration', 'Porcelaine', 'Blanc', 40, 55, 60, 'Des toilettes très confortable si jamais vous avez un petit besoin dans les transports en commun (une boite de tampax offerte).', '1255.00', './img/decoration02.jpg', 'Usagé-e-s mais ça va quand même'),
(11, 'Lampe de plafond', 'Luminaires', 'Verre, Métal', 'Blanc', 30, 20, 30, 'Un beau luminaire qui fait de la lumière : il faut l\'installer au plafond évidemment.', '23.00', './img/luminaire01.jpg', 'Bien mais pas top'),
(12, 'Table de bureau', 'Tables', 'Bois, Métal', 'Brun', 100, 70, 250, 'Une superbe table à roulettes avec des freins pour pas qu\'elle ne bouge pendant qu\'on travaille dessus (pratique).', '90.00', './img/table01.jpg', 'Comme neuf'),
(13, 'Canapé design', 'Canapes', 'Tissus', 'Rose', 250, 60, 73, 'Un superbe canapé rose, qu\'il ira trop bien dans ton salon.', '458.00', './img/canape02.jpg', 'Bien mais pas top'),
(14, 'Tableau blanc', 'Divers', 'Plastique, Métal', 'Blanc', 40, 150, 10, 'Un tableau blanc sur lequel on peut écrire des petits mots d\'amour.', '33.00', './img/divers03.jpg', 'Comme neuf'),
(15, 'Fauteuil design', 'Chaises', 'Tissus, Métal', 'Rouge', 70, 120, 80, 'Un fauteuil rouge retrouvé sur le trottoir.', '1.00', './img/chaise04.jpg', 'Pourri-e-s'),
(16, 'Escalier de menuisier', 'Rangements', 'Bois', 'Bois', 150, 520, 80, 'Un escalier de menuisier correctement posé avec des rangements en dessous. Par contre, ça va pas être simple de venir le démonter.', '1699.00', './img/escalier01.jpg', 'Comme neuf');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  ADD KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  ADD KEY `IDX_75EA56E016BA31DB` (`delivered_at`);

--
-- Index pour la table `meuble_eco`
--
ALTER TABLE `meuble_eco`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `meuble_eco`
--
ALTER TABLE `meuble_eco`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
