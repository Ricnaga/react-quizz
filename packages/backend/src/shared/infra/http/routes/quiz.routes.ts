import { ListResultadoController } from '@modules/quiz/infra/http/controllers/ListResultadoController';
import { FastifyInstance } from 'fastify';

const listResultadoController = new ListResultadoController();

export const quizRoutes = async (app: FastifyInstance) => {
  app.get(
    '/:userId',
    listResultadoController.schema(),
    async (request, reply) => listResultadoController.handler(request, reply),
  );
};
