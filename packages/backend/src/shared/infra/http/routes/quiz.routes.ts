import {
  ListResultadoByIdController,
  ListResultadoByIdControllerRequest,
} from '@modules/quiz/infra/http/controllers/ListResultadoByIdController';
import { Quiz } from '@modules/quiz/infra/knex/entities/Quiz';
import { FastifyInstance } from 'fastify';

import { KnexEntity } from '@shared/infra/knex/knexfile';

const listResultadoByIdController = new ListResultadoByIdController();

interface IQuizList extends ListResultadoByIdControllerRequest {
  Reply: KnexEntity<Quiz>;
}

export const quizRoutes = async (app: FastifyInstance) => {
  app.get<IQuizList>(
    '/:userId',
    listResultadoByIdController.schema(),
    async (request, reply) =>
      listResultadoByIdController.handler(request, reply),
  );
};
