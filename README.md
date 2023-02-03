<div align="center">
<img src="./frontend.jpg" />
<img src="./backend.jpg" />
</div>

<div align="center">

# Quiz example

</div>

<img src="https://img.shields.io/github/license/Ricnaga/react-quizz?style=for-the-badge"/>

### <div align="center"> Monorepo de Frontend/Backend, abordando conceitos sobre: </div>

- [React](https://reactjs.org/) - Lib para frontend
    - [Typescript](https://www.typescriptlang.org/) - Tipagens avançadas
    - [Formik](https://formik.org/) - Manipular formulário no react
    - [Axios](https://axios-http.com/ptbr/docs/intro) - Chamadas assíncronas ao backend
    - [Emotion](https://emotion.sh/docs/introduction) - Utilizar estilização dentro da UI
    - [MaterialUI](https://mui.com/) - UI para react
    - [Vite](https://vitejs.dev/) - Build tool para react
    - [React router dom](https://www.typescriptlang.org/) - Roteamento de páginas

- [Angular](https://angular.io/) - Framework frontend
    - [Material Angular](https://material.angular.io/) - UI para react
    - [Formly](https://formly.dev/) - Manipular formulário no Angular

- [Fastify](https://www.fastify.io/) - Web framework para nodejs
    - [Swagger](https://swagger.io/) - Documentação de endpoints do backend
    - [Knex](https://knexjs.org/) - SQL Query builder | migrations | seeds
    - [Docker](https://www.docker.com/) - Rodando banco de dados em container
    - [Mysql](https://www.mysql.com/) - Consultar e registro de dados


## <div align="center">Requisitos</div>

Para executar a aplicação é necessário instalar algumas ferramentas tais como um editor de códigos para realizar compilação dos mesmos. Nesse projeto foi utilizado o [Visual Studio Code](https://code.visualstudio.com/), [NodeJS](https://nodejs.org/en/) para compilação do código, [Git](https://gitforwindows.org/) para baixar o repositório e baixar todas as dependências necessárias, [@angular/cli](https://angular.io/guide/setup-local#prerequisites) para instalar as dependências do angular. [Docker](https://www.docker.com/) Para executar o banco de dados.

Para configurar o Backend é necessário seguir as [instruções](https://github.com/Ricnaga/react-quizz/tree/main/packages/backend) previamente ao frontend

```bash
# Clone este repositório
$ git clone <https://github.com/Ricnaga/react-quizz>

# Acesse a pasta do projeto no terminal/cmd
$ cd react-quizz

# Instale as dependências
$ yarn (ou npm -i)

# Para iniciar a aplicação apenas no frontend com react 
$ yarn frontend:react (ou npm run frontend:react)

# Para iniciar a aplicação apenas no frontend com angular 
$ yarn frontend:angular (ou npm run frontend:angular)

# Para iniciar a aplicação apenas no backend 
$ yarn backend (ou npm run backend)

# Para iniciar a aplicação Frontend e Backend junta 
$ yarn dev:angular ou dev:react (ou npm run dev:angular ou dev:react)

# Assim que a aplicação terminar de executar, abra o navegador e digite http://localhost:5173 para o react ou http://localhost:4200 para angular

```