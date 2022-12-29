import { FastifyInstance } from 'fastify';

type UserRequestBody = {
  Body: Record<'email' | 'nome' | 'whatsapp', string>;
};

export const userRoutes = async (app: FastifyInstance) =>
  app.post<UserRequestBody>(
    '/',
    {
      schema: {
        description: 'post some data',
        tags: ['User'],
        body: {
          type: 'object',
          properties: {
            nome: { type: 'string' },
            telefone: { type: 'string' },
            email: { type: 'string', format: 'email' },
          },
        },
        response: {
          201: {
            description: 'Created',
            type: 'object',
            properties: {
              id: { type: 'string' },
            },
          },
        },
      },
    },
    ({ body }, response) => {
      const { email, nome, whatsapp } = body;

      return response.send({ id: '221' });
    },
  );
