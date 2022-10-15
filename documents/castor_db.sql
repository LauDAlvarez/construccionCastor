-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Oct 15, 2022 at 07:21 PM
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
  `views` int(11) UNSIGNED NOT NULL,
  `sales` int(11) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `logic_delete` tinyint(4) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `brand`, `description`, `photo`, `stock`, `price`, `discount`, `views`, `sales`, `created_at`, `updated_at`, `category_id`, `logic_delete`) VALUES
(1, 'Arena', NULL, 'Arena fina embolsada 50kg', 'arenaEmbolsada.webp', 500, '350.00', '0.00', 0, 0, NULL, NULL, 1, 1),
(2, 'Cemento', 'Loma Negra', '50kg', 'cemento.webp', 1000, '1500.00', '0.00', 0, 0, NULL, NULL, 1, 1),
(3, 'Andamio', NULL, 'Cuerpo de andamio, modular', 'andamios.webp', 200, '31000.00', '0.00', 0, 0, NULL, NULL, 1, 1),
(4, 'Inodoro', 'Roca', 'Inodoro', 'Inodoro Roca.jpg', 500, '23000.00', '0.00', 0, 0, '0000-00-00 00:00:00', '2022-09-28 00:00:00', 4, 1),
(5, 'Lavatorio Italiana 3 Agujeros Grande', 'Roca', 'Lavatorio Italiana 3 Agujeros Grande', '304618-800-800.webp', 5, '5894.00', '10.00', 0, 0, NULL, NULL, 4, 1),
(6, 'Grifería Bañera Embutir Con Transferencia Bimando Allegro', 'FV', 'Grifería Bañera Embutir Con Transferencia Bimando Allegro', '280311-800-800.webp', 150, '12500.00', '0.00', 0, 0, NULL, NULL, 4, 1),
(7, 'Martillo neumático', 'Stanley', 'Exclusivo para uso doméstico', 'Martillo neumático Stanley.jpg', 500, '50000.00', '10.40', 0, 0, '0000-00-00 00:00:00', '2022-09-28 00:00:00', 3, 1),
(8, 'Hormigonera', NULL, 'Exclusivo para uso doméstico', 'hormigonera.webp', 8, '30000.00', '0.00', 0, 0, NULL, NULL, 3, 1),
(9, 'Inodoro Monaco Largo Blanco', 'Roca', 'Inodoro Monaco Largo Blanco', 'Inodoro Monaco Largo Blanco.jpg', 500, '27500.00', '0.00', 0, 0, '2022-09-28 00:00:00', '0000-00-00 00:00:00', 4, 1),
(10, 'Lámpara colgante globo 4l g9 49cm bronce', 'Roca', 'Lámpara colgante globo 4l g9 49cm bronce', 'Lampara colgante.webp', 500, '27996.00', '0.00', 0, 0, '2022-09-28 00:00:00', '0000-00-00 00:00:00', 2, 1),
(11, 'Lámpara Pie Carilux Madera Paraíso Beige 50x55x30 Cm', 'Carilux', 'Lámpara Pie Carilux Madera Paraíso Beige 50x55x30 Cm', 'Lampa_pie_carilux.webp', 500, '29596.00', '0.00', 0, 0, '2022-09-28 00:00:00', '0000-00-00 00:00:00', 2, 1),
(12, 'Led bulbo 12w fría E27', 'Candela', 'Led bulbo 12w fría E27', '312142-800-800.webp', 500, '319.20', '0.00', 0, 0, '2022-09-28 00:00:00', '0000-00-00 00:00:00', 2, 1),
(13, 'Led Plafon Cuadrado Embutible Fría Candela 18W', 'Candela', 'Led Plafon Cuadrado Embutible Fría Candela 18W', '312116-1600-1600.webp', 30, '1596.00', '0.00', 0, 0, '2022-09-28 00:00:00', '0000-00-00 00:00:00', 2, 1),
(14, 'Cemento 50Kg', 'Holcim', 'Cemento 50Kg. Holcim', '315157-800-800.webp', 50, '1699.00', '0.00', 0, 0, '2022-09-28 00:00:00', '0000-00-00 00:00:00', 1, 1),
(15, 'Columna Florencia Blanco 650x154x154Cm', 'Andina', 'Columna Florencia Blanco 650x154x154Cm', '278677-800-800.webp', 2, '7722.00', '0.00', 0, 0, '2022-09-28 00:00:00', '0000-00-00 00:00:00', 4, 1),
(16, 'Difusor Exterior Chapa E27 Bidireccional Trapecio', 'Balucce', 'Difusor Exterior Chapa E27 Bidireccional Trapecio', '283980-800-800.webp', 10, '3996.00', '0.00', 0, 0, '2022-09-28 00:00:00', '0000-00-00 00:00:00', 2, 1),
(17, 'Llave De Impacto A Batería 18V Gdx 180-Li', 'Bosh', 'Llave De Impacto A Batería 18V Gdx 180-Li', '313264-800-800.webp', 2, '23456.00', '5.00', 0, 0, '0000-00-00 00:00:00', '2022-09-28 00:00:00', 3, 1),
(18, 'Aspiradora Seco Humedo vcd1212', 'Nex', 'Aspiradora Seco Humedo vcd1212', '1665844467898-286314-800-800.webp', 2, '14945.00', '0.00', 0, 0, '2022-10-15 00:00:00', '2022-10-15 00:00:00', 5, 1),
(19, 'Calefón 14 Lts', 'Nex', 'Calefón Nex 14 Lts con Encencido Gas Natural', '1665844993600-273155-800-800.webp', 500, '45595.00', '0.00', 0, 0, '2022-10-15 00:00:00', '0000-00-00 00:00:00', 5, 1),
(20, 'Calefón Blanco', 'Volcan', 'Calefón TN 315BFVN Volcan Blanco', '1665845132903-308728-800-800.webp', 500, '42396.00', '0.00', 0, 0, '2022-10-15 00:00:00', '0000-00-00 00:00:00', 5, 1),
(21, 'Carretilla Rueda De Goma 75 L', 'Gardex', 'Carretilla Rueda De Goma 75 L', '1665845402779-269801-800-800.webp', 500, '13360.00', '0.00', 0, 0, '2022-10-15 00:00:00', '0000-00-00 00:00:00', 3, 1),
(22, 'Microondas Samsung 23Lts Negro', 'Samsung', 'Microondas Samsung 23Lts Negro', '1665845557635-278994-800-800.webp', 500, '55995.00', '10.00', 0, 0, '2022-10-15 00:00:00', '0000-00-00 00:00:00', 5, 1),
(23, '', '', '', '1665846426020-269801-800-800.webp', 500, '0.00', '0.00', 0, 0, '2022-10-15 00:00:00', '0000-00-00 00:00:00', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `product_category`
--

CREATE TABLE `product_category` (
  `id` int(10) UNSIGNED NOT NULL,
  `name_category` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `product_category`
--

INSERT INTO `product_category` (`id`, `name_category`) VALUES
(1, 'Construcción'),
(2, 'Iluminación'),
(3, 'Máquinas y herramientas'),
(4, 'Baños y cocinas'),
(5, 'Electrodomésticos'),
(6, 'Aberturas'),
(7, 'Pinturas');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
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
(6, 'Popeye', 'El Marino', 'popeye@gmail.com', '1234', 'https://avatar.com', '2022-09-10 13:37:13', '2022-09-10 13:41:54', 1, 1),
(10, 'Sapo', 'Pepe', 'sapo@gmail.com', '$2a$12$E9V.0JpLw.fZRSg6W5sCw.9iw8qZSK64ZvA/x1SYp/aXRG6976TRi', 'userDefault.webp', '2022-10-08 02:53:34', NULL, 1, 1),
(11, 'Castor', 'Patagonico', 'castor@gmail.com', '$2a$12$M/xSbNXQu8taobpiings6elROnYj/9ypctrfoVVCQV9DM9JgGlZXS', '1665326043886_img.jpg', '2022-10-09 14:34:04', NULL, 1, 1);

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `product_category`
--
ALTER TABLE `product_category`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

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
