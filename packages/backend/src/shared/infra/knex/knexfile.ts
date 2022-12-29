import { knex, Knex } from 'knex';
import { join } from 'path';

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
    migrations: {
      tableName: 'knex_migrations',
      extension: 'ts',
      directory: join(process.cwd(), 'migrations'),
    },
    seeds: {
      extension: 'ts',
      directory: join(process.cwd(), 'seeds'),
    },
  },
};

const knexQuery = () => knex(mysql2Config.development);

const initKnexDB = () =>
  knexQuery()
    .raw('SELECT NOW();')
    .then(() => console.log(`\t\x1b[37m-> DATABASE:\t\x1b[32mONLINE`))
    .catch(() => console.log(`\t\x1b[37m-> DATABASE:\t\x1b[31mOFFLINE`));

export default mysql2Config.development;
export { initKnexDB, knexQuery };
