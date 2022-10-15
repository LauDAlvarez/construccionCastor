-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 15-10-2022 a las 13:07:27
-- Versión del servidor: 5.7.34
-- Versión de PHP: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `castor_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `description` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `photo` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `stock` int(10) NOT NULL,
  `price` decimal(10,2) UNSIGNED NOT NULL,
  `discount` decimal(5,2) UNSIGNED NOT NULL DEFAULT '0.00',
  `views` int(11) UNSIGNED NOT NULL,
  `sales` int(11) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `logic_delete` tinyint(4) UNSIGNED NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `brand`, `description`, `photo`, `stock`, `price`, `discount`, `views`, `sales`, `created_at`, `updated_at`, `category_id`, `logic_delete`) VALUES
(1, 'Arena', NULL, 'Arena fina embolsada 50kg', 'arenaEmbolsada.webp', 500, '350.00', '0.00', 0, 0, NULL, NULL, 1, 1),
(2, 'Cemento', 'Loma Negra', '50kg', 'cemento.webp', 1000, '1500.00', '0.00', 0, 0, NULL, NULL, 1, 1),
(3, 'Andamio', NULL, 'Cuerpo de andamio, modular', 'andamios.webp', 200, '31000.00', '0.00', 0, 0, NULL, NULL, 2, 1),
(4, 'Inodoro', 'Roca', 'Inodoro', 'Inodoro Roca.jpg', 500, '23000.00', '0.00', 0, 0, '0000-00-00 00:00:00', '2022-09-28 00:00:00', 1, 1),
(5, 'Lavatorio', 'Roca', 'Lavatorio completo', 'default-image.png', 50, '18000.00', '10.00', 0, 0, NULL, NULL, 5, 1),
(6, 'Canilla', 'fv', 'Canilla para baño estilo frances', 'default-image.png', 150, '8000.00', '0.00', 0, 0, NULL, NULL, 4, 1),
(7, 'Martillo neumático', 'Stanley', 'Exclusivo para uso doméstico', 'Martillo neumático Stanley.jpg', 500, '50000.00', '10.40', 0, 0, '0000-00-00 00:00:00', '2022-09-28 00:00:00', 1, 1),
(8, 'Hormigonera', NULL, 'Exclusivo para uso doméstico', 'hormigonera.webp', 8, '30000.00', '0.00', 0, 0, NULL, NULL, 3, 1),
(9, 'Inodoro Monaco Largo Blanco', 'Roca', 'Inodoro Monaco Largo Blanco', 'Inodoro Monaco Largo Blanco.jpg', 500, '27500.00', '0.00', 0, 0, '2022-09-28 00:00:00', '0000-00-00 00:00:00', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_category`
--

CREATE TABLE `product_category` (
  `id` int(10) UNSIGNED NOT NULL,
  `type` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `product_category`
--

INSERT INTO `product_category` (`id`, `type`) VALUES
(1, 'Materiales de construción'),
(2, 'Herramientas'),
(3, 'Máquinas'),
(4, 'Grifería'),
(5, 'Sanitarios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `photo` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  `category_id` int(10) UNSIGNED NOT NULL DEFAULT '1',
  `logic_delete` tinyint(4) UNSIGNED NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
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
-- Estructura de tabla para la tabla `user_category`
--

CREATE TABLE `user_category` (
  `id` int(10) UNSIGNED NOT NULL,
  `roll` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `user_category`
--

INSERT INTO `user_category` (`id`, `roll`) VALUES
(1, 'Comprador'),
(2, 'Propietario'),
(3, 'Administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_x_product`
--

CREATE TABLE `user_x_product` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `quantity` int(100) UNSIGNED NOT NULL,
  `comments` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `comment_date` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `user_x_product`
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
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indices de la tabla `product_category`
--
ALTER TABLE `product_category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indices de la tabla `user_category`
--
ALTER TABLE `user_category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user_x_product`
--
ALTER TABLE `user_x_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `product_category`
--
ALTER TABLE `product_category`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `user_category`
--
ALTER TABLE `user_category`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `user_x_product`
--
ALTER TABLE `user_x_product`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `product_category` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `user_category` (`id`);

--
-- Filtros para la tabla `user_x_product`
--
ALTER TABLE `user_x_product`
  ADD CONSTRAINT `user_x_product_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user_x_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
