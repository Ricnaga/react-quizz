import { KnexEntity } from '@shared/infra/knex/knexfile';

import { User } from '../infra/knex/entities/User';
import { UserRepository } from '../infra/knex/repositories/UserRepository';

export class DeleteUserByIdRules {
  userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }
  async execute(userId: string): Promise<KnexEntity<User>> {
    const user = await this.userRepository.findByUserId(userId);

    if (!user) {
      throw new Error('Erro! Esse usuário não foi encontrado');
    }

    await this.userRepository.delete(userId);

    return user;
  }
}
