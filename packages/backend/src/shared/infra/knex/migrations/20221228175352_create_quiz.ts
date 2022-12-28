import { Knex } from 'knex';

const tableName = 'quiz';
export async function up(knex: Knex): Promise<void> {
  return knex.schema.hasTable(tableName).then(() =>
    knex.schema.createTable(tableName, (table) => {
      table.increments('id', { primaryKey: true }).notNullable();
      table.uuid('userId', { primaryKey: true }).notNullable();
      table.string('resultado');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    }),
  );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(tableName);
}
