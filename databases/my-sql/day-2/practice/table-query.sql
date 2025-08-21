USE college;

# Create
CREATE TABLE student(
    rollno INT PRIMARY KEY,
    NAME VARCHAR(50)
)

# Drop
DROP TABLE student;

# Insert Data
INSERT INTO student(rollno, name) VALUES(1,'PINKY'),(2, 'RAJ'),(3,'CHHAVI');

-- # Select
SELECT * FROM  student; 