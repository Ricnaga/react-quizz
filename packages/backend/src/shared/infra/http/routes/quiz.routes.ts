import {
  CreateQuizByIdController,
  CreateQuizControllerRequest,
} from '@modules/quiz/infra/http/controllers/CreateQuizController';
import {
  DeleteQuizByIdController,
  DeleteQuizByIdControllerRequest,
} from '@modules/quiz/infra/http/controllers/DeleteQuizByIdController ';
import {
  ListQuizByIdController,
  ListQuizByIdControllerRequest,
} from '@modules/quiz/infra/http/controllers/ListQuizByIdController';
import {
  UpdateQuizByIdController,
  UpdateQuizByIdControllerRequest,
} from '@modules/quiz/infra/http/controllers/UpdateQuizByIdController';
import { Quiz } from '@modules/quiz/infra/knex/entities/Quiz';
import { FastifyInstance } from 'fastify';

import { KnexEntity } from '@shared/infra/knex/knexfile';

const listQuizByIdController = new ListQuizByIdController();
const createQuizByIdController = new CreateQuizByIdController();
const updateQuizByIdController = new UpdateQuizByIdController();
const deleteQuizByIdController = new DeleteQuizByIdController();

interface IQuizList extends ListQuizByIdControllerRequest {
  Reply: KnexEntity<Quiz>;
}

interface IQuizCreate extends CreateQuizControllerRequest {
  Reply: { message: string };
}

interface IQuizUpdateById extends UpdateQuizByIdControllerRequest {
  Reply: KnexEntity<Quiz>;
}
interface IQuizDeleteById extends DeleteQuizByIdControllerRequest {
  Reply: KnexEntity<Quiz>;
}

export const quizRoutes = async (app: FastifyInstance) => {
  app.post<IQuizCreate>(
    '/',
    createQuizByIdController.schema(),
    async (request, reply) => createQuizByIdController.handler(request, reply),
  );
  app.get<IQuizList>(
    '/:userId',
    listQuizByIdController.schema(),
    async (request, reply) => listQuizByIdController.handler(request, reply),
  );

  app.put<IQuizUpdateById>(
    '/:userId',
    updateQuizByIdController.schema(),
    async (request, reply) => updateQuizByIdController.handler(request, reply),
  );
  app.delete<IQuizDeleteById>(
    '/:userId',
    deleteQuizByIdController.schema(),
    async (request, reply) => deleteQuizByIdController.handler(request, reply),
  );
};
