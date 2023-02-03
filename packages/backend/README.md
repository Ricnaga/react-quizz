<div align="center">

# Quiz Backend

</div>

Para configurar o ambiente para executar o Backend é necessário ter previamente o [Docker](https://www.docker.com/) instalado e executando

```bash
# Abra o terminal vá até a pasta do backend
$ cd packages/backend

# Dentro da pasta, com o docker em execução, execute o docker compose
$ docker compose up

# Será baixado e instalado a imagem mysql automaticamente, porém é necessário configurar um usuário root e dar privilégios, siga o tutorial no arquivo config_db.sh

# Após configurado seu banco de dados devemos criar as tabelas, execute o comando abaixo dentro da pasta do backend para instalar as tabelas
$ yarn knexfile migrate:latest

# Caso desejar popular as tabelas, execute o comando abaixo após as migrations (também na dentro da pasta do backend)
$ yarn knexfile seed:run

# Agora que as tabelas foram criadas, podemos executar o backend
$ yarn dev (ou npm run dev)

# Caso esteja na pasta raíz também pode ser executado o backend
$ yarn backend

# Assim que a aplicação terminar de executar, abra o navegador e digite http://localhost:3001/swagger para abrir a documentação dos endpoints
```