
DROP USER IF EXISTS 'alvarodaw'@'%';
CREATE USER 'alvarodaw'@'%' IDENTIFIED BY 'roble';
GRANT ALL PRIVILEGES ON `project`.* TO 'alvarodaw'@'%' IDENTIFIED BY 'roble';