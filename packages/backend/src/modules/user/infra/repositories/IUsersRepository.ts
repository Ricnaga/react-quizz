import { KnexEntity } from '@shared/infra/knex/knexfile';

import { User } from '../knex/entities/User';

export default interface IUsersRepository {
  findByEmail(email: string): Promise<KnexEntity<User> | null>;
  create(): Promise<void>;
}
