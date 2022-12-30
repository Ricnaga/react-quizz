import { CreateUser } from '@modules/user/infra/http/controllers/CreateUser';
import { FastifyInstance } from 'fastify';

export type UserRequestBody = {
  Body: Record<'email' | 'nome' | 'whatsapp', string>;
};

const createUser = new CreateUser();

export const userRoutes = async (app: FastifyInstance) =>
  app.post<UserRequestBody>('/', createUser.schema(), (request, reply) =>
    createUser.handler(request, reply),
  );
