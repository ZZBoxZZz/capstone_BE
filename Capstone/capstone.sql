-- Adminer 4.8.1 MySQL 8.0.33 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `binh_luan`;
CREATE TABLE `binh_luan` (
  `binh_luan_id` int NOT NULL AUTO_INCREMENT,
  `nguoi_dung_id` int DEFAULT NULL,
  `hinh_id` int DEFAULT NULL,
  `ngay_binh_luan` datetime DEFAULT NULL,
  `noi_dung` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`binh_luan_id`),
  KEY `nguoi_dung_id` (`nguoi_dung_id`),
  KEY `hinh_id` (`hinh_id`),
  CONSTRAINT `binh_luan_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`),
  CONSTRAINT `binh_luan_ibfk_3` FOREIGN KEY (`hinh_id`) REFERENCES `hinh_anh` (`hinh_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `binh_luan` (`binh_luan_id`, `nguoi_dung_id`, `hinh_id`, `ngay_binh_luan`, `noi_dung`) VALUES
(2,	2,	1,	'2022-05-20 14:30:00',	'good'),
(3,	3,	1,	'2022-05-20 17:30:00',	'nice'),
(4,	NULL,	NULL,	NULL,	NULL),
(6,	4,	2,	'2022-06-21 10:30:00',	'holy moly'),
(7,	NULL,	NULL,	NULL,	NULL);

DROP TABLE IF EXISTS `hinh_anh`;
CREATE TABLE `hinh_anh` (
  `hinh_id` int NOT NULL AUTO_INCREMENT,
  `ten_hinh` varchar(50) DEFAULT NULL,
  `duong_dan` varchar(100) DEFAULT NULL,
  `mo_ta` varchar(50) DEFAULT NULL,
  `nguoi_dung_id` int DEFAULT NULL,
  PRIMARY KEY (`hinh_id`),
  KEY `nguoi_dung_id` (`nguoi_dung_id`),
  CONSTRAINT `hinh_anh_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `hinh_anh` (`hinh_id`, `ten_hinh`, `duong_dan`, `mo_ta`, `nguoi_dung_id`) VALUES
(1,	'hinh xe',	'xe.jpg',	'xe hoi porsche',	2),
(2,	'xe 2',	'xe2.jpeg',	'xe porsche khac',	3),
(3,	'bike',	'bike.jpg',	'xe moto',	5),
(4,	'bike2',	'bike2.jpg',	'xe moto 2',	7);

DROP TABLE IF EXISTS `luu_anh`;
CREATE TABLE `luu_anh` (
  `nguoi_dung_id` int NOT NULL,
  `hinh_id` int NOT NULL,
  `ngay_luu` datetime DEFAULT NULL,
  PRIMARY KEY (`nguoi_dung_id`,`hinh_id`),
  KEY `hinh_id` (`hinh_id`),
  CONSTRAINT `luu_anh_ibfk_1` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`nguoi_dung_id`),
  CONSTRAINT `luu_anh_ibfk_2` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `hinh_anh` (`nguoi_dung_id`),
  CONSTRAINT `luu_anh_ibfk_3` FOREIGN KEY (`hinh_id`) REFERENCES `hinh_anh` (`hinh_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DROP TABLE IF EXISTS `nguoi_dung`;
CREATE TABLE `nguoi_dung` (
  `nguoi_dung_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `mat_khau` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `ho_ten` varchar(50) DEFAULT NULL,
  `tuoi` int DEFAULT NULL,
  `anh_dai_dien` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`nguoi_dung_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `nguoi_dung` (`nguoi_dung_id`, `email`, `mat_khau`, `ho_ten`, `tuoi`, `anh_dai_dien`) VALUES
(1,	'test@gmail.com',	'1234',	'Lewis',	23,	NULL),
(2,	'huy@gmail.com',	NULL,	NULL,	NULL,	NULL),
(3,	'dte@gmail.com',	'231',	'ret',	14,	NULL),
(4,	'dte@gmail.com',	'231',	'ret',	14,	NULL),
(5,	'dte@gmail.com',	'231',	'ret',	14,	NULL),
(6,	'dte@gmail.com',	'231',	'ret',	14,	NULL),
(7,	'dte@gmail.com',	'231',	'ret',	14,	NULL),
(34,	'tes@gmail.com',	'68756',	'jfie',	21,	'1684426604396_r1.jpg'),
(35,	'tes@gmail.com',	'68756',	'jfie',	21,	'1684426790420_r1.jpg'),
(36,	'fet@gmail.com',	'$2b$10$fpFNKwS06SlTtxHmEP4XWenOrgIMTjkLlzeIXBhj6aZlDZaP4C39C',	'jfie',	21,	'1684471727497_r1.jpg'),
(37,	'aaa@gmail.com',	'$2b$10$X6wXUUBz7wDfvOBKs6Snhu39LlGINGG/yNN.cboSyJBuiS2.pNc7m',	'jfie',	21,	'1684501972676_r1.jpg');

-- 2023-05-19 16:11:46
