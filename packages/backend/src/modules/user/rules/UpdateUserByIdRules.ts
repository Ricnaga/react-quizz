import { KnexEntity } from '@shared/infra/knex/knexfile';

import { User } from '../infra/knex/entities/User';
import { UserRepository } from '../infra/knex/repositories/UserRepository';

type UpdateUserByIdRulesParams = Omit<
  User,
  'Model' | 'className' | 'created_at'
>;

type UpdateUserByIdRulesResponse = Promise<
  KnexEntity<UpdateUserByIdRulesParams>
>;

export class UpdateUserByIdRules {
  userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }
  async execute(user: UpdateUserByIdRulesParams): UpdateUserByIdRulesResponse {
    const userFound = await this.userRepository.findByUserId(user.id);

    if (!userFound) {
      throw new Error('Erro! Esse usuário não foi encontrado');
    }
    if (!userFound.id) {
      throw new Error('Erro! Necessário um id válido');
    }
    if (!userFound.email) {
      throw new Error('Erro! Necessário um email válido');
    }
    if (!userFound.nome) {
      throw new Error('Erro! Necessário um nome válido');
    }
    if (!userFound.telefone) {
      throw new Error('Erro! Necessário um telefone válido');
    }

    await this.userRepository.update({ user });

    return user;
  }
}
