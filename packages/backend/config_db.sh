docker logs db_quiz 2>&1 | grep GENERATED

docker exec -it db_quiz mysql -uroot -p

ALTER USER 'root'@'localhost' IDENTIFIED BY 'root';

CREATE DATABASE db_quiz;

UPDATE mysql.user SET host='%' WHERE user='root';
FLUSH PRIVILEGES;