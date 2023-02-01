# Procedimento para resetar a senha do banco de dados
# Necessário gerar uma senha randômica que o banco disponibiliza por padrão
$ docker logs db_quiz 2>&1 | grep GENERATED

# Copie a linha que está criptografada em hash, digite o comando abaixo e cole a senha
$ docker exec -it db_quiz mysql -uroot -p

# Depois de acessar o banco dever[a ser criado um usuário
$ ALTER USER 'root'@'localhost' IDENTIFIED BY 'root';

# Após isso deve ser criado o banco com o comando abaixo
$ CREATE DATABASE db_quiz;

# Depois de criado o banco é necessário dar privilégio de acesso para o usuário root
$ UPDATE mysql.user SET host='%' WHERE user='root';
$ FLUSH PRIVILEGES;

# Alguns comando mais corriqueiros logo abaixo, listar bancos de dados
$ show databases;

# selecionar o banco para serem feitas consultas
$ use db_quiz;

# Mostrar as tabelas do banco selecionado
$ show tables;

# Mostrar a coluna users
$ show columns from db_quiz.users;

# Mostrar a coluna quiz
$ show columns from db_quiz.quiz;

# Mostrar os dados contidos nas tabelas quiz e users do banco db_quiz
$ select * from db_quiz.users, db_quiz.quiz;