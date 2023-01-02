import { UserRepository } from '../infra/knex/repositories/UserRepository';

type ICreateUserRules = Record<'email' | 'nome' | 'telefone', string>;

export class CreateUserRules {
  async execute(user: ICreateUserRules) {
    const userRepository = new UserRepository();

    const findByEmail = await userRepository.findByEmail(user.email);

    if (user.email === findByEmail?.email)
      throw new Error('Erro: Usuário ja cadastrado');

    const userId = await userRepository.create(user);

    return {
      id: userId,
    };
  }
}
