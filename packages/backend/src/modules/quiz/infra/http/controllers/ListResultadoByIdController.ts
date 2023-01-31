import { ListResultadoByIdRules } from '@modules/quiz/rules/ListResultadoByIdRules';
import { FastifyReply, FastifyRequest, RouteShorthandOptions } from 'fastify';

export interface ListResultadoByIdControllerRequest {
  Params: { userId: string };
}

export class ListResultadoByIdController {
  schema(): RouteShorthandOptions {
    return {
      schema: {
        tags: ['Quiz'],
        summary: 'Resultado do quiz',
        description: 'Retorna nome e resultado do quiz',
        params: {
          type: 'object',
          properties: {
            userId: {
              type: 'string',
              description: 'userId',
            },
          },
        },
        response: {
          200: {
            description: 'OK',
            type: 'object',
            properties: {
              id: { type: 'string' },
              user_id: { type: 'string' },
              resultado: { type: 'string' },
              created_at: { type: 'string' },
            },
          },
          400: {
            description: 'Bad Request',
            type: 'object',
            properties: {
              message: { type: 'string' },
            },
          },
        },
      },
    };
  }

  async handler(
    request: FastifyRequest<ListResultadoByIdControllerRequest>,
    reply: FastifyReply,
  ) {
    try {
      const listResultadoByIdRules = new ListResultadoByIdRules();
      const quiz = await listResultadoByIdRules.execute(request.params.userId);

      return reply.send(quiz);
    } catch (error) {
      return reply.code(400).send(error);
    }
  }
}
