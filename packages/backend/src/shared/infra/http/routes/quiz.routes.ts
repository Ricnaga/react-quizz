import { ListResultadoByIdController } from '@modules/quiz/infra/http/controllers/ListResultadoByIdController';
import { FastifyInstance } from 'fastify';

const listResultadoByIdController = new ListResultadoByIdController();

export type GetByIdParams = { Params: { userId: string } };
type GetByIdReply = { Reply: Record<'nome' | 'resultado', string> };

export const quizRoutes = async (app: FastifyInstance) => {
  app.get<GetByIdParams & GetByIdReply>(
    '/:userId',
    listResultadoByIdController.schema(),
    async (request, reply) =>
      listResultadoByIdController.handler(request, reply),
  );
};
