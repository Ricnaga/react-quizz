import { ICreateUser } from '@modules/user/dtos/ICreateUserDTO';

import { KnexEntity, knexQuery } from '@shared/infra/knex/knexfile';

import IUsersRepository from '../../repositories/IUsersRepository';
import { User, USER_TABLE_NAME } from '../entities/User';

export class UserRepository implements IUsersRepository {
  public async create(user: ICreateUser): Promise<string | null> {
    const createUser = (await knexQuery()
      .insert(user)
      .into('users')
      .then(() =>
        knexQuery().select('user_id').from('users').where('email', user.email),
      )) as [{ userId: string }];

    return createUser.shift()?.userId ?? null;
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
      .table(USER_TABLE_NAME)
      .where({ id: userId })
      .then((response) => response[0]);

    return user;
  }
}
