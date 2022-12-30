import { KnexEntity, knexQuery } from '@shared/infra/knex/knexfile';

import IUsersRepository from '../../repositories/IUsersRepository';
import { User } from '../entities/User';

export class UserRepository implements IUsersRepository {
  public async findByEmail(email: string): Promise<KnexEntity<User> | null> {
    const findByEmail = await knexQuery()
      .select()
      .from('users')
      .where('email', email);

    return findByEmail.find((user) => user) ?? null;
  }

  public async create(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
