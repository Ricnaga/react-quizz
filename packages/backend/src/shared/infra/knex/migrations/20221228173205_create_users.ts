import { Knex } from 'knex';

const tableName = 'users';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.hasTable(tableName).then(() =>
    knex.schema.createTable(tableName, (table) => {
      table.increments('id', { primaryKey: true }).notNullable();
      table
        .uuid('userId', { primaryKey: true })
        .index()
        .notNullable()
        .defaultTo(knex.raw('(UUID())'));
      table.string('nome');
      table.string('email');
      table.string('telefone');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    }),
  );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(tableName);
}
