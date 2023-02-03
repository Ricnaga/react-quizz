import { QuizRepository } from '../infra/knex/repositories/QuizRepository';

export class CreateQuizByIdRules {
  quizRepository: QuizRepository;

  constructor() {
    this.quizRepository = new QuizRepository();
  }
  async execute(userId: string, resultado: string): Promise<void> {
    await this.quizRepository.create(userId, resultado);
  }
}
