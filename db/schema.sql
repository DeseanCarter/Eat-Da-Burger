CREATE DATABASE burgers_DB;
USE burgers_DB;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);