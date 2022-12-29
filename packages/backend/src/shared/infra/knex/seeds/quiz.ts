import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('quiz').del();

  // Inserts seed entries
  await knex('quiz').insert([
    { id: '1', resultado: '10' },
    { id: '2', resultado: '20' },
    { id: '3', resultado: '30' },
  ]);
}
