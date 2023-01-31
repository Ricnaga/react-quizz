import { USER_TABLE_NAME } from '@modules/user/infra/knex/entities/User';
import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(USER_TABLE_NAME).del();

  // Inserts seed entries
  await knex(USER_TABLE_NAME).insert([
    {
      id: '1',
      nome: 'John Doe 1',
      email: 'JohnDoe1@contoso.com',
      telefone: '11 1111 1111',
    },
    {
      id: '2',
      nome: 'John Doe 2',
      email: 'JohnDoe2@contoso.com',
      telefone: '22 2222 2222',
    },
    {
      id: '3',
      nome: 'John Doe 3',
      email: 'JohnDoe3@contoso.com',
      telefone: '33 3333 3333',
    },
  ]);
}
