### 2. Practice Question✅

-- Write an SQL query to:
-- 1. Create a table called `Employees` with the following columns:
--    - `EmployeeID` (integer, primary key)
--    - `FirstName` (varchar, 50)
--    - `LastName` (varchar, 50)
--    - `Age` (integer)
--    - `Salary` (decimal)
-- 2. Insert a new record into the `Employees` table:
--    - `EmployeeID = 1`, `FirstName = 'John'`, `LastName = 'Doe'`, `Age = 30`, `Salary = 60000`

# creating databases inside database
CREATE DATABASE IF NOT EXISTS google;

USE google;
CREATE TABLE Employees(
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Age INT,
    Salary DECIMAL
);
DROP TABLE Employees;
INSERT INTO Employees(EmployeeID, FirstName, LastName, Age, Salary) VALUES(1,'john','doe',30,60000)

SHOW DATABASES;
SELECT * FROM Employees
