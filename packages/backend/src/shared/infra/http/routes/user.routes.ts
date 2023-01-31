import {
  CreateUserController,
  CreateUserControllerRequest,
} from '@modules/user/infra/http/controllers/CreateUserController';
import {
  ListUserByIdController,
  ListUserByIdControllerRequest,
} from '@modules/user/infra/http/controllers/ListUserByIdController';
import { User } from '@modules/user/infra/knex/entities/User';
import { FastifyInstance } from 'fastify';

import { KnexEntity } from '@shared/infra/knex/knexfile';

interface IUserPost extends CreateUserControllerRequest {
  Reply: { id: string };
}

interface IUserListById extends ListUserByIdControllerRequest {
  Reply: KnexEntity<User>;
}

const createUserController = new CreateUserController();
const listUserByIdController = new ListUserByIdController();

export const userRoutes = async (app: FastifyInstance) => {
  app.post<IUserPost>('/', createUserController.schema(), (request, reply) =>
    createUserController.handler(request, reply),
  );
  app.get<IUserListById>(
    '/:userId',
    listUserByIdController.schema(),
    async (request, reply) => listUserByIdController.handler(request, reply),
  );
};
