import { BaseRules } from '@utils/BaseRules';

import { KnexEntity } from '@shared/infra/knex/knexfile';

import { User } from '../infra/knex/entities/User';
import { UserRepository } from '../infra/knex/repositories/UserRepository';

export class ListUserByIdRules extends BaseRules {
  userRepository: UserRepository;

  constructor() {
    super();
    this.userRepository = new UserRepository();
  }
  async execute(userId: string): Promise<KnexEntity<User>> {
    const user = await this.userRepository.findByUserId(
      this.setLocalId(userId),
    );

    if (!user) {
      throw new Error('Erro! Esse usuário não foi encontrado');
    }

    return {
      ...user,
      user_id: this.setGlobalId(user.user_id),
      id: this.setGlobalId(user.id.toString()),
    };
  }
}
