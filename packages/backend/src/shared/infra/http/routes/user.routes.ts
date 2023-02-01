import {
  CreateUserController,
  CreateUserControllerRequest,
} from '@modules/user/infra/http/controllers/CreateUserController';
import {
  DeleteUserByIdController,
  DeleteUserByIdControllerRequest,
} from '@modules/user/infra/http/controllers/DeleteUserByIdController';
import {
  ListUserByIdController,
  ListUserByIdControllerRequest,
} from '@modules/user/infra/http/controllers/ListUserByIdController';
import {
  UpdateUserByIdController,
  UpdateUserByIdControllerRequest,
} from '@modules/user/infra/http/controllers/UpdateUserByIdController';
import { User } from '@modules/user/infra/knex/entities/User';
import { FastifyInstance } from 'fastify';

import { KnexEntity } from '@shared/infra/knex/knexfile';

interface IUserPost extends CreateUserControllerRequest {
  Reply: { id: string };
}

interface IUserListById extends ListUserByIdControllerRequest {
  Reply: KnexEntity<User>;
}
interface IUserDeletetById extends DeleteUserByIdControllerRequest {
  Reply: KnexEntity<User>;
}
interface IUserUpdateById extends UpdateUserByIdControllerRequest {
  Reply: KnexEntity<User>;
}

const createUserController = new CreateUserController();
const listUserByIdController = new ListUserByIdController();
const deleteUserByIdController = new DeleteUserByIdController();
const updateUserByIdController = new UpdateUserByIdController();

export const userRoutes = async (app: FastifyInstance) => {
  app.post<IUserPost>('/', createUserController.schema(), (request, reply) =>
    createUserController.handler(request, reply),
  );
  app.get<IUserListById>(
    '/:userId',
    listUserByIdController.schema(),
    async (request, reply) => listUserByIdController.handler(request, reply),
  );
  app.put<IUserUpdateById>(
    '/:userId',
    updateUserByIdController.schema(),
    async (request, reply) => updateUserByIdController.handler(request, reply),
  );
  app.delete<IUserDeletetById>(
    '/:userId',
    deleteUserByIdController.schema(),
    async (request, reply) => deleteUserByIdController.handler(request, reply),
  );
};
