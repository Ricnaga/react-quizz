import { QUIZ_TABLE_NAME } from '@modules/quiz/infra/knex/entities/Quiz';
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.hasTable(QUIZ_TABLE_NAME).then(() =>
    knex.schema.createTable(QUIZ_TABLE_NAME, (table) => {
      table.increments('id', { primaryKey: true }).notNullable();
      table.uuid('user_id');
      table.string('resultado');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    }),
  );
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(QUIZ_TABLE_NAME);
}
