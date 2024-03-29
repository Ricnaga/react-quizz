import { ICreateUser } from '@modules/user/dtos/ICreateUserDTO';
import { IUpdateUserDTO } from '@modules/user/dtos/IUpdateUserDTO';

import { KnexEntity } from '@shared/infra/knex/knexfile';

import { User } from '../knex/entities/User';

export default interface IUsersRepository {
  findByEmail(email: string): Promise<KnexEntity<User> | null>;
  create(user: ICreateUser): Promise<string | null>;
  findByUserId(userId: string): Promise<KnexEntity<User> | undefined>;
  delete(userId: string): Promise<void>;
  update(user: IUpdateUserDTO): Promise<void>;
}
