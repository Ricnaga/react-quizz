import {
  CreateUserController,
  CreateUserControllerRequest,
} from '@modules/user/infra/http/controllers/CreateUserController';
import { FastifyInstance } from 'fastify';

interface IUserPost extends CreateUserControllerRequest {
  Reply: { id: string };
}

const createUserController = new CreateUserController();

export const userRoutes = async (app: FastifyInstance) =>
  app.post<IUserPost>('/', createUserController.schema(), (request, reply) =>
    createUserController.handler(request, reply),
  );
