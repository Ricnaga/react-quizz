import { KnexEntity, knexQuery } from '@shared/infra/knex/knexfile';

import IQuizRepository from '../../repositories/IQuizRepository';
import { Quiz, QUIZ_TABLE_NAME } from '../entities/Quiz';

export class QuizRepository implements IQuizRepository {
  async findByUserId(userId: string): Promise<KnexEntity<Quiz> | undefined> {
    const quiz = await knexQuery()
      .select()
      .table(QUIZ_TABLE_NAME)
      .where({ user_id: userId })
      .then((response) => response[0]);

    return quiz;
  }
}
