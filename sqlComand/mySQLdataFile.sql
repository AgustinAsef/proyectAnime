SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema animeproject
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema animeproject
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `animeproject` DEFAULT CHARACTER SET utf8 ;
USE `animeproject` ;

-- -----------------------------------------------------
-- Table `animeproject`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `animeproject`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(40) NOT NULL,
  `userName` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `animeproject`.`series`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `animeproject`.`series` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `serieName` VARCHAR(100) NOT NULL,
  `createdBy` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `createdBy_idx` (`createdBy` ASC) VISIBLE,
  CONSTRAINT `createdBy`
    FOREIGN KEY (`createdBy`)
    REFERENCES `animeproject`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `animeproject`.`caps`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `animeproject`.`caps` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `isCheck` TINYINT NOT NULL DEFAULT 0,
  `capNum` INT NOT NULL,
  `serieId` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_chapters_serie1_idx` (`serieId` ASC) VISIBLE,
  CONSTRAINT `fk_chapters_serie1`
    FOREIGN KEY (`serieId`)
    REFERENCES `animeproject`.`series` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
