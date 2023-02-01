import { DeleteQuizByIdRules } from '@modules/quiz/rules/DeleteQuizByIdRules';
import { FastifyReply, FastifyRequest, RouteShorthandOptions } from 'fastify';

export interface DeleteQuizByIdControllerRequest {
  Params: { userId: string };
}

export class DeleteQuizByIdController {
  schema(): RouteShorthandOptions {
    return {
      schema: {
        tags: ['Quiz'],
        summary: 'Apagar quiz',
        description: 'Apagar um resultado baseado num userId',
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
    request: FastifyRequest<DeleteQuizByIdControllerRequest>,
    reply: FastifyReply,
  ) {
    try {
      const deleteQuizByIdRules = new DeleteQuizByIdRules();
      const quiz = await deleteQuizByIdRules.execute(request.params.userId);

      return reply.send(quiz);
    } catch (error) {
      return reply.code(400).send(error);
    }
  }
}
