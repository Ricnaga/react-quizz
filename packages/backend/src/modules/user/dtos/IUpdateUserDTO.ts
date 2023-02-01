import { KnexEntity } from '@shared/infra/knex/knexfile';

import { User } from '../infra/knex/entities/User';

export interface IUpdateUserDTO {
  user: KnexEntity<Omit<User, 'Model' | 'className' | 'created_at'>>;
}
