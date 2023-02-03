export const USER_TABLE_NAME = 'users';

export class User {
  id: string;
  nome: string;
  email: string;
  user_id: string;
  telefone: string;
  created_at: Date;

  get className() {
    return 'User';
  }

  Model() {
    return {
      type: 'object',
      properties: {
        id: { type: 'string', format: 'uuid' },
        nome: { type: 'string' },
        telefone: { type: 'string' },
        email: { type: 'string', format: 'email' },
      },
    };
  }
}
