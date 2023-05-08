-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : lun. 08 mai 2023 à 16:43
-- Version du serveur : 5.7.24
-- Version de PHP : 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `react_wiki`
--

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `auteur_id` int(11) NOT NULL,
  `titre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `informations` longtext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`id`, `auteur_id`, `titre`, `image`, `informations`) VALUES
(1, 1, 'Iphone 14 Pro Max', 'assets/uploads/iphone_14_pro_max.jpeg', 'Une manière inédite et magique d’interagir avec votre iPhone. Des fonctionnalités de sécurité essentielles conçues pour sauver des vies. Un appareil photo 48 Mpx innovant pour un niveau de détail à couper le souffle. Et toute la puissance de la puce de smartphone ultime.'),
(2, 1, 'Iphone 14', 'assets/uploads/42d1cbccbbde0c2c2e75aace66a2f370.png', 'Le iPhone 14 est le dernier modèle de smartphone de la gamme iPhone de Apple. Il est équipé d\'un écran Super Retina XDR de 6,1 pouces, d\'un processeur A15 Bionic, de 6 Go de RAM et de 128 Go de stockage. Il dispose également d\'un triple appareil photo principal avec des capteurs de 12 MP, d\'un appareil photo frontal de 12 MP et d\'une caméra 3D LiDAR pour la réalité augmentée. Le iPhone 13 Pro prend en charge la 5G et est compatible avec la technologie MagSafe pour une charge sans fil rapide et facile. Il est également résistant à l\'eau et à la poussière et fonctionne sous iOS 15.'),
(3, 1, 'Iphone 13 pro', 'assets/uploads/995ab6cb29a753421287ff59dbfbc4ed.jpg', 'Le iPhone 13 Pro est le dernier modèle de smartphone de la gamme iPhone de Apple. Il est équipé d\'un écran Super Retina XDR de 6,1 pouces, d\'un processeur A15 Bionic, de 6 Go de RAM et de 128 Go de stockage. Il dispose également d\'un triple appareil photo principal avec des capteurs de 12 MP, d\'un appareil photo frontal de 12 MP et d\'une caméra 3D LiDAR pour la réalité augmentée. Le iPhone 13 Pro prend en charge la 5G et est compatible avec la technologie MagSafe pour une charge sans fil rapide et facile. Il est également résistant à l\'eau et à la poussière et fonctionne sous iOS 15.'),
(4, 1, 'Iphone 13', 'assets/uploads/iphone_13.jpg', 'Le iPhone 13 est le dernier modèle d\'iPhone de Apple, sorti en 2022. Il dispose d\'un écran Super Retina XDR de 6,1 pouces avec technologie OLED pour des couleurs vives et un contraste élevé. Le téléphone est alimenté par le nouveau processeur A15 Bionic, qui offre des performances de pointe pour les jeux et les applications exigeantes. Le iPhone 13 est également doté de la technologie 5G pour des vitesses de téléchargement et de chargement plus rapides. Il a un appareil photo de 12 mégapixels avec stabilisation optique de l\'image pour des photos et des vidéos de qualité, ainsi qu\'un capteur LiDAR pour la réalité augmentée. Il est également résistant à l\'eau et à la poussière, ce qui le rend idéal pour les utilisateurs actifs. En somme, le iPhone 13 est un téléphone puissant et polyvalent qui offre une expérience de qualité supérieure.'),
(5, 2, 'Macbook Pro 13', 'assets/uploads/MacBook_Pro_13.jpg', 'Le MacBook Pro 13 est un ordinateur portable de la gamme MacBook Pro d\'Apple. Il est équipé d\'un écran Retina de 13,3 pouces et d\'un processeur Intel Core i5 ou i7 de 8e génération. Il dispose également de 8 Go ou 16 Go de mémoire vive, ainsi que d\'un stockage SSD allant de 128 Go à 2 To. Le MacBook Pro 13 est doté de plusieurs ports, dont deux ports Thunderbolt 3 et un port de chargement USB-C. Il est également équipé d\'un clavier rétroéclairé et d\'un trackpad Force Touch. En termes de design, il est fin et léger, avec une coque en aluminium. Le MacBook Pro 13 est conçu pour offrir des performances puissantes et une expérience utilisateur intuitive.'),
(6, 2, 'Macbook Pro 16', 'assets/uploads/Mac_Book_Pro_16.jpeg', 'Le MacBook Pro 16 est un ordinateur portable haut de gamme conçu par Apple. Il est doté d\'un écran Retina de 16 pouces avec une résolution de 3072 x 1920 pixels, offrant une qualité d\'image exceptionnelle. Il est alimenté par un processeur Intel Core de 9e génération, assurant des performances rapides et fluides pour une utilisation quotidienne. Le MacBook Pro 16 est également équipé d\'une carte graphique AMD Radeon Pro, ce qui en fait une excellente option pour les utilisateurs qui ont besoin de graphiques de haute qualité pour leur travail. En outré, il dispose d\'un clavier rétro-éclairé et de Touch ID pour une sécurité renforcée.'),
(7, 2, 'Macbook Air', 'assets/uploads/Mac_Book_Air.jpg', 'Le MacBook Air est un ordinateur portable léger et portable conçu par Apple. Il est doté d\'un écran Retina de 13,3 pouces avec une résolution de 2560 x 1600 pixels, offrant une qualité d\'image exceptionnelle. Il est alimenté par un processeur Intel Core de 8e génération, assurant des performances rapides et fluides pour une utilisation quotidienne. Le MacBook Air est également doté d\'une carte graphique intégrée, ce qui en fait une excellente option pour les utilisateurs qui ont besoin d\'un ordinateur portable portable pour leur travail ou leur divertissement. En outre, il est équipé d\'un clavier rétro-éclairé et de Touch ID pour une sécurité renforcée.'),
(8, 2, 'Macbook Air M2', 'assets/uploads/Mac_Book_Air.jpg', 'Le MacBook Air M2 est un ordinateur portable de la gamme MacBook Air de Apple. Il est alimenté par un processeur M2, qui offre des performances rapides et une efficacité énergétique améliorée. Le MacBook Air M2 est équipé d\'un écran Retina de 13,3 pouces avec une résolution de 2560 x 1600 pixels, ce qui en fait un choix idéal pour la visualisation de contenu haute résolution. Il est également doté de Touch ID pour une sécurité renforcée et d\'un clavier rétroéclairé pour une utilisation confortable dans toutes les conditions d\'éclairage. En termes de stockage, le MacBook Air M2 est disponible avec des options allant jusqu\'à 2 To de stockage SSD, ce qui permet de stocker facilement de nombreux fichiers et applications. En outre, il est équipé de nombreuses ports, y compris deux ports Thunderbolt 3 pour des vitesses de transfert de données incroyables et la connectivité à des écrans externes et d\'autres périphériques. En somme, le MacBook Air M2 est un ordinateur portable polyvalent et puissant, idéal pour la prodution de contenu, la navigation sur le web et bien plus encore.'),
(9, 1, 'LOL XD', 'https://www.adwshop.com/2377-large_default/durites-de-suppression-du-generateur-de-son-pour-mini-cooper-s-et-john-cooper-works-13719806688.jpg', 'PTDDR\n.\n..\n...\n🤣');

-- --------------------------------------------------------

--
-- Structure de la table `article_categorie`
--

CREATE TABLE `article_categorie` (
  `article_id` int(11) NOT NULL,
  `categorie_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `article_categorie`
--

INSERT INTO `article_categorie` (`article_id`, `categorie_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 2),
(6, 2),
(7, 2),
(8, 2),
(9, 1),
(9, 2);

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE `categorie` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`id`, `nom`, `image`) VALUES
(1, 'Téléphone', 'assets/uploads/image_categorie.jpg\r\n'),
(2, 'Ordinateur', 'assets/uploads/image_categorie2.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `password`, `username`) VALUES
(1, '$2b$10$D2Viz5FZ.mylvwhvXIwufeNpDoR0R5iGM3nJaYxDF1/Fq2GfdF3fK', 'Cyril Bizouarn'),
(2, '$2y$13$dTtH5sT2.sDqV8TiXTIN1ujnOR6YdccQqXor3RU9V1dkslSroGyu2', 'Cyril Bizouarn');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_23A0E6660BB6FE6` (`auteur_id`);

--
-- Index pour la table `article_categorie`
--
ALTER TABLE `article_categorie`
  ADD PRIMARY KEY (`article_id`,`categorie_id`),
  ADD KEY `IDX_934886107294869C` (`article_id`),
  ADD KEY `IDX_93488610BCF5E72D` (`categorie_id`);

--
-- Index pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `FK_23A0E6660BB6FE6` FOREIGN KEY (`auteur_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `article_categorie`
--
ALTER TABLE `article_categorie`
  ADD CONSTRAINT `FK_934886107294869C` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_93488610BCF5E72D` FOREIGN KEY (`categorie_id`) REFERENCES `categorie` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
