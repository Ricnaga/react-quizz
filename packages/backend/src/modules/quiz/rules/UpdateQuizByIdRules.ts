import { KnexEntity } from '@shared/infra/knex/knexfile';

import { Quiz } from '../infra/knex/entities/Quiz';
import { QuizRepository } from '../infra/knex/repositories/QuizRepository';

export class UpdateQuizByIdRules {
  quizRepository: QuizRepository;

  constructor() {
    this.quizRepository = new QuizRepository();
  }
  async execute(userId: string, resultado: string): Promise<KnexEntity<Quiz>> {
    const quizFound = await this.quizRepository.findByUserId(userId);

    if (!quizFound) {
      throw new Error('Erro! Não foi encontrado o resultado para esse usuário');
    }
    if (!quizFound.id) {
      throw new Error('Erro! Necessário um id válido');
    }
    if (!quizFound.user_id) {
      throw new Error('Erro! Necessário um user_id válido');
    }

    await this.quizRepository.update(userId, resultado);

    return quizFound;
  }
}
