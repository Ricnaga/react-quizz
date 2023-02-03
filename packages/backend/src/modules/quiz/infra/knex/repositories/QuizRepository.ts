import { KnexEntity, knexQuery } from '@shared/infra/knex/knexfile';

import IQuizRepository from '../../repositories/IQuizRepository';
import { Quiz } from '../entities/Quiz';

export class QuizRepository implements IQuizRepository {
  async findByUserId(userId: string): Promise<KnexEntity<Quiz> | undefined> {
    const quiz = await knexQuery()
      .select()
      .table('quiz')
      .where({ user_id: userId })
      .then((response) => response[0]);

    return quiz;
  }

  async create(userId: string, resultado: string): Promise<void> {
    await knexQuery().insert({ resultado, user_id: userId }).table('quiz');
  }

  async delete(userId: string): Promise<void> {
    await knexQuery().delete().table('quiz').where({ user_id: userId });
  }

  async update(userId: string, resultado: string): Promise<void> {
    await knexQuery()
      .update(resultado)
      .table('quiz')
      .where({ user_id: userId });
  }
}
