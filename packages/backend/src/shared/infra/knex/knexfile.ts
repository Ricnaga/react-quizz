import type { Knex } from "knex";


type KnexConfig = Record<'development', Knex.Config>

const config: KnexConfig = {
  development: {

  },

};

exports = { config };
