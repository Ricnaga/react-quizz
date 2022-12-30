type ICreateUserRules = Record<'email' | 'nome' | 'whatsapp', string>;

export class CreateUserRules {
  async execute(user: ICreateUserRules) {
    return {
      id: '2222222',
    };
  }
}
