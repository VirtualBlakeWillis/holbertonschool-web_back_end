-- Write a SQL script that creates a table users
CREATE TABLE users (
    id int,
    email varchar(255) NOT NULL,
    name varchar(255),
    PRIMARY KEY (id)
    ) IF NOT EXISTS;
