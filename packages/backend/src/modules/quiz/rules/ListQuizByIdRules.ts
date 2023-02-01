import { KnexEntity } from '@shared/infra/knex/knexfile';

import { Quiz } from '../infra/knex/entities/Quiz';
import { QuizRepository } from '../infra/knex/repositories/QuizRepository';

export class ListQuizByIdRules {
  quizRepository: QuizRepository;

  constructor() {
    this.quizRepository = new QuizRepository();
  }
  async execute(userId: string): Promise<KnexEntity<Quiz>> {
    const quiz = await this.quizRepository.findByUserId(userId);

    if (!quiz) {
      throw new Error('Erro! Não foi encontrado o resultado para esse usuário');
    }

    return quiz;
  }
}
