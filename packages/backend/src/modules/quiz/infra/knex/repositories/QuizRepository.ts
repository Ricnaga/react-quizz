import { BaseRepository } from '@utils/BaseRepository';

import { KnexEntity, knexQuery } from '@shared/infra/knex/knexfile';

import IQuizRepository from '../../repositories/IQuizRepository';
import { Quiz } from '../entities/Quiz';

export class QuizRepository extends BaseRepository implements IQuizRepository {
  async findByUserId(userId: string): Promise<KnexEntity<Quiz> | undefined> {
    const quiz = await knexQuery()
      .select()
      .table('quiz')
      .where({ user_id: userId })
      .then((response) => response[0]);

    return {
      ...quiz,
      id: this.setGlobalId(quiz.id),
      user_id: this.setGlobalId(quiz.user_id),
    };
  }

  async create(resultado: string): Promise<void> {
    await knexQuery().insert(resultado).table('quiz');
  }

  async delete(userId: string): Promise<void> {
    const user_id = this.setLocalId(userId);
    await knexQuery().delete().table('quiz').where({ user_id });
  }

  async update(userId: string, resultado: string): Promise<void> {
    const user_id = this.setLocalId(userId);
    await knexQuery().update(resultado).table('quiz').where({ user_id });
  }
}
