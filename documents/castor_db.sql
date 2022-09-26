-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Sep 17, 2022 at 03:22 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `castor_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `photo` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `stock` int(10) NOT NULL,
  `price` decimal(10,2) UNSIGNED NOT NULL,
  `discount` decimal(5,2) UNSIGNED NOT NULL DEFAULT 0.00,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `logic_delete` tinyint(4) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `brand`, `description`, `photo`, `stock`, `price`, `discount`, `created_at`, `updated_at`, `category_id`, `logic_delete`) VALUES
(1, 'Arena', NULL, 'Arena fina embolsada 50kg', '/images/products/arenaEmbolsada.webp', 500, '350.00', '0.00', NULL, NULL, 1, 1),
(2, 'Cemento', 'Loma Negra', '50kg', '/images/products/cemento.webp', 1000, '1500.00', '0.00', NULL, NULL, 1, 1),
(3, 'Andamio', NULL, 'Cuerpo de andamio, modular', '/images/products/andamios.webp', 200, '31000.00', '0.00', NULL, NULL, 2, 1),
(4, 'Inodoro', 'Roca', 'Inodoro con mochila', 'https://fotodefault.com', 200, '23000.00', '0.00', NULL, NULL, 5, 1),
(5, 'Lavatorio', 'Roca', 'Lavatorio completo', 'https://fotodefault.com', 50, '18000.00', '10.00', NULL, NULL, 5, 1),
(6, 'Canilla', 'fv', 'Canilla para baño estilo frances', 'https://fotodefault.com', 150, '8000.00', '0.00', NULL, NULL, 4, 1),
(7, 'Martillo neumático', 'Stanley', 'Exclusivo para uso doméstico', 'https://fotodefault.com', 15, '50000.00', '10.40', NULL, NULL, 3, 1),
(8, 'Hormigonera', NULL, 'Exclusivo para uso doméstico', '/images/products/hormigonera.webp', 8, '30000.00', '0.00', NULL, NULL, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `product_category`
--

CREATE TABLE `product_category` (
  `id` int(10) UNSIGNED NOT NULL,
  `type` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product_category`
--

INSERT INTO `product_category` (`id`, `type`) VALUES
(1, 'Materiales de construcción'),
(2, 'Herramientas'),
(3, 'Máquinas'),
(4, 'Grifería'),
(5, 'Sanitarios');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `photo` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL,
  `category_id` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `logic_delete` tinyint(4) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `photo`, `created_at`, `updated_at`, `category_id`, `logic_delete`) VALUES
(1, 'Lautaro', 'Alvarez', 'lautaro@gmail.com', '1234', 'https://avatar.com', NULL, NULL, 1, 1),
(2, 'Luis', 'Palma', 'luis@gmail.com', '1234', 'https://avatar.com', NULL, NULL, 1, 1),
(3, 'Juan', 'Fragueiro', 'juan@gmail.com', '1234', 'https://avatar.com', NULL, NULL, 1, 1),
(4, 'Mariano', 'Alonso', 'mariano@gmail.com', '1234', 'https://avatar.com', NULL, NULL, 1, 1),
(5, 'Hernán', 'del Valle', 'hernan@gmail.com', '1234', 'https://avatar.com', NULL, NULL, 1, 1),
(6, 'Popeye', 'El Marino', 'popeye@gmail.com', '1234', 'https://avatar.com', '2022-09-10 13:37:13', '2022-09-10 13:41:54', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_category`
--

CREATE TABLE `user_category` (
  `id` int(10) UNSIGNED NOT NULL,
  `roll` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_category`
--

INSERT INTO `user_category` (`id`, `roll`) VALUES
(1, 'Comprador'),
(2, 'Propietario'),
(3, 'Administrador');

-- --------------------------------------------------------

--
-- Table structure for table `user_x_product`
--

CREATE TABLE `user_x_product` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `quantity` int(100) UNSIGNED NOT NULL,
  `comments` text CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `comment_date` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_x_product`
--

INSERT INTO `user_x_product` (`id`, `user_id`, `product_id`, `quantity`, `comments`, `comment_date`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 0, NULL, NULL, NULL, NULL),
(2, 1, 2, 0, NULL, NULL, NULL, NULL),
(3, 1, 8, 0, NULL, NULL, NULL, NULL),
(4, 3, 7, 0, NULL, NULL, NULL, NULL),
(5, 2, 3, 0, 'Exelente producto, muy recomendable', '2022-09-03 20:11:00', NULL, '2022-09-03 23:11:00'),
(6, 5, 4, 0, NULL, NULL, NULL, NULL),
(7, 5, 5, 0, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `product_category`
--
ALTER TABLE `product_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `user_category`
--
ALTER TABLE `user_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_x_product`
--
ALTER TABLE `user_x_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `product_category`
--
ALTER TABLE `product_category`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user_category`
--
ALTER TABLE `user_category`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user_x_product`
--
ALTER TABLE `user_x_product`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `product_category` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `user_category` (`id`);

--
-- Constraints for table `user_x_product`
--
ALTER TABLE `user_x_product`
  ADD CONSTRAINT `user_x_product_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user_x_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
