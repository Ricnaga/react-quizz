import { KnexEntity } from '@shared/infra/knex/knexfile';

import { Quiz } from '../knex/entities/Quiz';

export default interface IQuizRepository {
  findByUserId(userId: string): Promise<KnexEntity<Quiz> | undefined>;
  create(resultado: string): Promise<void>;
  delete(userId: string): Promise<void>;
  update(userId: string, resultado: string): Promise<void>;
}
