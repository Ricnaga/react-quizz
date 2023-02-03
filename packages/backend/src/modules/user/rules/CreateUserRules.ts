import { QuizRepository } from '@modules/quiz/infra/knex/repositories/QuizRepository';
import { BaseRules } from '@utils/BaseRules';

import { UserRepository } from '../infra/knex/repositories/UserRepository';

type ICreateUserRules = Record<
  'email' | 'nome' | 'telefone' | 'resultado',
  string
>;

export class CreateUserRules extends BaseRules {
  userRepository: UserRepository;
  quizRepository: QuizRepository;

  constructor() {
    super();
    this.userRepository = new UserRepository();
    this.quizRepository = new QuizRepository();
  }

  async execute({ resultado, ...user }: ICreateUserRules) {
    const findByEmail = await this.userRepository.findByEmail(user.email);

    if (user.email === findByEmail?.email)
      throw new Error('Erro: Usuário ja cadastrado');

    const userId = await this.userRepository.create(user);

    if (!userId) throw new Error('Erro: Id Não encontrado');

    await this.quizRepository.create(userId, resultado);

    return {
      id: this.setGlobalId(userId),
    };
  }
}
