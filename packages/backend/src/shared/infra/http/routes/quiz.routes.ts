import {
  ListResultadoByIdController,
  ListResultadoByIdControllerRequest,
} from '@modules/quiz/infra/http/controllers/ListResultadoByIdController';
import { FastifyInstance } from 'fastify';

const listResultadoByIdController = new ListResultadoByIdController();

interface IQuizList extends ListResultadoByIdControllerRequest {
  Reply: Record<'nome' | 'resultado', string>;
}

export const quizRoutes = async (app: FastifyInstance) => {
  app.get<IQuizList>(
    '/:userId',
    listResultadoByIdController.schema(),
    async (request, reply) =>
      listResultadoByIdController.handler(request, reply),
  );
};
