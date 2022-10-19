-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 09 Paź 2022, 20:58
-- Wersja serwera: 10.4.22-MariaDB
-- Wersja PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `wisielec`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `hasla`
--

CREATE TABLE `hasla` (
  `id` int(11) NOT NULL,
  `haslo` text NOT NULL,
  `kategoria` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `hasla`
--

INSERT INTO `hasla` (`id`, `haslo`, `kategoria`) VALUES
(1, 'TULIPAN', 'Kwiat'),
(2, 'RÓŻA', 'Kwiat'),
(3, 'ZIEMIA', 'Planeta'),
(4, 'NOSOROŻEC', 'Zwierzę'),
(5, 'ŻYRAFA', 'Zwierzę'),
(6, 'ŁOSOŚ', 'Ryba'),
(7, 'ŚLEDŹ', 'Ryba'),
(8, 'MERCEDES', 'Marka samochodu'),
(9, 'CHEVROLET', 'Marka samochodu'),
(10, 'MCLAREN', 'Marka samochodu'),
(11, 'ŁOTWA', 'Kraj'),
(12, 'ARGENTYNA', 'Kraj'),
(13, 'SOSNOWIEC', 'Miasto w Polsce'),
(14, 'WROCŁAW', 'Miasto w Polsce'),
(15, 'SZCZECIN', 'Miasto w Polsce');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `hasla`
--
ALTER TABLE `hasla`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
