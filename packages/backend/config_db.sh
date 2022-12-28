docker logs db_quiz 2>&1 | grep GENERATED

docker exec -it db_quiz mysql -uroot -p

ALTER USER 'root'@'localhost' IDENTIFIED BY 'root';

CREATE DATABASE db_quiz;

UPDATE mysql.user SET host='%' WHERE user='root';
FLUSH PRIVILEGES;

show databases;
use db_quiz;
show tables;
show columns from db_quiz.users;
show columns from db_quiz.quiz;
select * from db_quiz.users, db_quiz.quiz;