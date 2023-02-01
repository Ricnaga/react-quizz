import {
  ListQuizByIdController,
  ListQuizByIdControllerRequest,
} from '@modules/quiz/infra/http/controllers/ListQuizByIdController';
import { Quiz } from '@modules/quiz/infra/knex/entities/Quiz';
import { FastifyInstance } from 'fastify';

import { KnexEntity } from '@shared/infra/knex/knexfile';

const listQuizByIdController = new ListQuizByIdController();

interface IQuizList extends ListQuizByIdControllerRequest {
  Reply: KnexEntity<Quiz>;
}

export const quizRoutes = async (app: FastifyInstance) => {
  app.post<any>('/', listQuizByIdController.schema(), async (request, reply) =>
    listQuizByIdController.handler(request, reply),
  );
  app.get<IQuizList>(
    '/:userId',
    listQuizByIdController.schema(),
    async (request, reply) => listQuizByIdController.handler(request, reply),
  );

  app.put<any>(
    '/:userId',
    listQuizByIdController.schema(),
    async (request, reply) => listQuizByIdController.handler(request, reply),
  );
  app.delete<any>(
    '/:userId',
    listQuizByIdController.schema(),
    async (request, reply) => listQuizByIdController.handler(request, reply),
  );
};
