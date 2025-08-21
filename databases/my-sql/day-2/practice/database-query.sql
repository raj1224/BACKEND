-- Database related queries

CREATE DATABASE college; #BAD WAY

CREATE DATABASE IF NOT EXISTS college; #GOOD WAY

-- drop database

DROP DATABASE college; #bad

DROP DATABASE IF EXISTS college; #good

-- show databases
SHOW DATABASES;