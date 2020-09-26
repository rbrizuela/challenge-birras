
CREATE DATABASE db_birras;

USE db_birras;

--------------------------------------------------------------------------------
--  TABLE Meetups
--------------------------------------------------------------------------------
CREATE TABLE Meetups(
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  fecha DATE NOT NULL,
  hora TIME NOT NULL,
  descripcion VARCHAR(50) NOT NULL,
  lugar VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--------------------------------------------------------------------------------
--  TABLE Miembros 
--------------------------------------------------------------------------------
CREATE TABLE Miembros(
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--------------------------------------------------------------------------------
--  TABLE Asistentes 
--------------------------------------------------------------------------------
CREATE TABLE Asistentes(
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  idMeetup INT NOT NULL,
  idMiembro INT NOT NULL,
  checkIn CHAR(1),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
