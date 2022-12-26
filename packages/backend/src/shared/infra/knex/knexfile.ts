import { knex, Knex } from 'knex';

type KnexConfig = Record<'development', Knex.Config>;

const mysql2Config: KnexConfig = {
  development: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'db_quiz',
    },
  },
};

export const knexQuery = () => knex(mysql2Config.development);

export const initKnexDB = () =>
  knexQuery()
    .raw('SELECT NOW();')
    .then(() => console.log(`\t-> DATABASE:\t\x1b[32mONLINE\n\t\n`))
    .catch(() => console.log(`\t\x1b[37m-> DATABASE:\t\x1b[31mOFFLINE\n\t\n`));
