import { FastifyInstance } from 'fastify';

type UserRequestBody = {
  Body: Record<'email' | 'nome' | 'whatsapp', string>;
};

export const userRoutes = async (app: FastifyInstance) =>
  app.post<UserRequestBody>('/', ({ body }, response) => {
    const { email, nome, whatsapp } = body;

    return response.send({ id: '221' });
  });
