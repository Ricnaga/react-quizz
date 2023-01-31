import { KnexEntity } from '@shared/infra/knex/knexfile';

import { Quiz } from '../knex/entities/Quiz';

export default interface IQuizRepository {
  findByUserId(userId: string): Promise<KnexEntity<Quiz> | undefined>;
}
