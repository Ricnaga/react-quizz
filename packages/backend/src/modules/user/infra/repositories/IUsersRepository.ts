import { ICreateUser } from '@modules/user/dtos/ICreateUserDTO';

import { KnexEntity } from '@shared/infra/knex/knexfile';

import { User } from '../knex/entities/User';

export default interface IUsersRepository {
  findByEmail(email: string): Promise<KnexEntity<User> | null>;
  create(user: ICreateUser): Promise<string | null>;
}
