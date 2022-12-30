import { CreateUserController } from '@modules/user/infra/http/controllers/CreateUserController';
import { FastifyInstance } from 'fastify';

export type PostRequestBody = {
  Body: Record<'email' | 'nome' | 'whatsapp', string>;
};

const createUserController = new CreateUserController();

export const userRoutes = async (app: FastifyInstance) =>
  app.post<PostRequestBody & { Reply: { id: string } }>(
    '/',
    createUserController.schema(),
    (request, reply) => createUserController.handler(request, reply),
  );
