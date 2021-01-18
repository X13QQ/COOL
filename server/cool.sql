-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2021-01-18 06:34:41
-- 伺服器版本： 10.4.14-MariaDB
-- PHP 版本： 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `cool`
--

-- --------------------------------------------------------

--
-- 資料表結構 `contact`
--

CREATE TABLE `contact` (
  `id` int(20) NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `service` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(2000) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `contact`
--

INSERT INTO `contact` (`id`, `email`, `service`, `subject`, `content`) VALUES
(7, 'COOL@TEST.COM', '3', '主旨主旨主旨主旨主旨主旨主旨', '內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容'),
(8, '', '0', '', ''),
(9, '', '0', '', ''),
(10, '', '0', '', ''),
(11, '', '0', '', ''),
(12, 'qqq', '1', 'q', 'qqq');

-- --------------------------------------------------------

--
-- 資料表結構 `cool_order`
--

CREATE TABLE `cool_order` (
  `id` int(11) NOT NULL,
  `order_no` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `member_no` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `cool_order`
--

INSERT INTO `cool_order` (`id`, `order_no`, `member_no`, `date`, `amount`, `price`, `status`) VALUES
(1, '202012150001', '1', '20201215', '1', '6000', '1'),
(2, '202012150002', '1', '20201216', '2', '999', '2'),
(3, '202012150003', '1', '20201217', '3', '2222', '3');

-- --------------------------------------------------------

--
-- 資料表結構 `favorites`
--

CREATE TABLE `favorites` (
  `id` int(20) NOT NULL,
  `member_no` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_no` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `valid` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `favorites`
--

INSERT INTO `favorites` (`id`, `member_no`, `product_no`, `valid`) VALUES
(1, '1', '1', '1'),
(2, '1', '2', '1');

-- --------------------------------------------------------

--
-- 資料表結構 `member`
--

CREATE TABLE `member` (
  `id` int(20) NOT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `account` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birth` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `letter` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `member`
--

INSERT INTO `member` (`id`, `name`, `account`, `password`, `phone`, `email`, `address`, `birth`, `letter`) VALUES
(1, 'cool', 'cool', '12345', '12345678906', 'cool@test.com', '桃園市中壢區中大路300號', '2021-01-13', 'N'),
(8, '', 'test5', 'test', '', 'test@com.tw', '', '', 'Y'),
(9, '', 'test2', 'test', '', 'test@com.tw', '', '', 'Y');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `cool_order`
--
ALTER TABLE `cool_order`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `favorites`
--
ALTER TABLE `favorites`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `cool_order`
--
ALTER TABLE `cool_order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `favorites`
--
ALTER TABLE `favorites`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member`
--
ALTER TABLE `member`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
