import { UserRepository } from '../infra/knex/repositories/UserRepository';

type ICreateUserRules = Record<'email' | 'nome' | 'whatsapp', string>;

export class CreateUserRules {
  async execute(user: ICreateUserRules) {
    const userRepository = new UserRepository();

    const findByEmail = await userRepository.findByEmail(user.email);

    if (!findByEmail)
      throw new Error('Erro: Não foi possível localizar esse email !');

    return {
      id: '2222222',
    };
  }
}
