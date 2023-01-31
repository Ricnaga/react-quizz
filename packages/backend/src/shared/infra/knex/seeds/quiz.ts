import { QUIZ_TABLE_NAME } from '@modules/quiz/infra/knex/entities/Quiz';
import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(QUIZ_TABLE_NAME).del();

  // Inserts seed entries
  await knex(QUIZ_TABLE_NAME).insert([
    { id: '1', user_id: '3', resultado: '10' },
    { id: '2', user_id: '2', resultado: '20' },
    { id: '3', user_id: '1', resultado: '30' },
  ]);
}
