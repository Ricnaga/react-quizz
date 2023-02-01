import { QuizRepository } from '../infra/knex/repositories/QuizRepository';

export class CreateQuizByIdRules {
  quizRepository: QuizRepository;

  constructor() {
    this.quizRepository = new QuizRepository();
  }
  async execute(resultado: string): Promise<void> {
    await this.quizRepository.create(resultado);
  }
}
