import { ICreateUser } from '@modules/user/dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '@modules/user/dtos/IUpdateUserDTO';

import { KnexEntity, knexQuery } from '@shared/infra/knex/knexfile';

import IUsersRepository from '../../repositories/IUsersRepository';
import { User } from '../entities/User';

export class UserRepository implements IUsersRepository {
  public async create(user: ICreateUser): Promise<string | null> {
    const createUser = (await knexQuery()
      .insert(user)
      .into('users')
      .then(() =>
        knexQuery().select('user_id').from('users').where('email', user.email),
      )) as [{ user_id: string }];

    return createUser.shift()?.user_id ?? null;
  }

  public async findByEmail(email: string): Promise<KnexEntity<User> | null> {
    const findByEmail = await knexQuery()
      .select()
      .from('users')
      .where('email', email);

    return findByEmail.find((user) => user) ?? null;
  }

  async findByUserId(userId: string): Promise<KnexEntity<User> | undefined> {
    const user = await knexQuery()
      .select()
      .table('users')
      .where({ id: userId })
      .then((response) => response[0]);

    return user;
  }

  async delete(userId: string): Promise<void> {
    await knexQuery().delete().table('users').where({ id: userId });
  }

  async update(user: IUpdateUserDTO): Promise<void> {
    await knexQuery().where(user).update(user).table('users');
  }
}
