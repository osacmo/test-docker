/* CREATE SCHEMA IF NOT EXISTS `example_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `example_db` ; */

CREATE TABLE IF NOT EXISTS `usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO `usuario` (`id`, `nombre`) 
VALUES (NULL, 'Oscar'), (NULL, 'Andres') 