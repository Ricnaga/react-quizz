export class Quiz {
  id: string;
  userId: string;
  resultado: string;
  created_at: Date;

  get className() {
    return 'Quiz';
  }

  Model() {
    return {
      type: 'object',
      properties: {
        id: { type: 'string', format: 'uuid' },
        userId: { type: 'string', format: 'uuid' },
        resultado: { type: 'string' },
      },
    };
  }
}
