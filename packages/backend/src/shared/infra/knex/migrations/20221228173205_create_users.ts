import { USER_TABLE_NAME } from '@modules/user/infra/knex/entities/User';
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.hasTable(USER_TABLE_NAME).then(() =>
    knex.schema.createTable(USER_TABLE_NAME, (table) => {
      table.increments('id', { primaryKey: true }).notNullable();
      table
        .uuid('user_id', { primaryKey: true })
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
  return knex.schema.dropTableIfExists(USER_TABLE_NAME);
}
