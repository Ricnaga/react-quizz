import { BaseRules } from '@utils/BaseRules';

import { KnexEntity } from '@shared/infra/knex/knexfile';

import { Quiz } from '../infra/knex/entities/Quiz';
import { QuizRepository } from '../infra/knex/repositories/QuizRepository';

export class ListQuizByIdRules extends BaseRules {
  quizRepository: QuizRepository;

  constructor() {
    super();
    this.quizRepository = new QuizRepository();
  }
  async execute(userId: string): Promise<KnexEntity<Quiz>> {
    const quiz = await this.quizRepository.findByUserId(
      this.setLocalId(userId),
    );

    if (!quiz) {
      throw new Error(
        'Erro! Não foi encontrado o resultado para o usuário desse Id',
      );
    }

    return {
      ...quiz,
      user_id: this.setGlobalId(quiz.user_id),
      id: this.setGlobalId(quiz.id.toString()),
    };
  }
}
