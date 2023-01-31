import { UserRepository } from '../infra/knex/repositories/UserRepository';

type ICreateUserRules = Record<'email' | 'nome' | 'telefone', string>;

export class CreateUserRules {
  userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(user: ICreateUserRules) {
    const findByEmail = await this.userRepository.findByEmail(user.email);

    if (user.email === findByEmail?.email)
      throw new Error('Erro: Usuário ja cadastrado');

    const userId = await this.userRepository.create(user);

    return {
      id: userId,
    };
  }
}
