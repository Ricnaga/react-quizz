import { UpdateQuizByIdRules } from '@modules/quiz/rules/UpdateQuizByIdRules';
import { FastifyReply, FastifyRequest, RouteShorthandOptions } from 'fastify';

export interface UpdateResultadoByIdControllerRequest {
  Params: { userId: string };
  Body: { resultado: string };
}

export class UpdateResultadoByIdController {
  schema(): RouteShorthandOptions {
    return {
      schema: {
        tags: ['Quiz'],
        summary: 'Resultado do quiz',
        description: 'Atualiza dados referente ao resultado do quiz',
        params: {
          type: 'object',
          properties: {
            userId: {
              type: 'string',
              description: 'userId',
            },
          },
        },
        body: {
          type: 'object',
          properties: {
            resultado: { type: 'string' },
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
          404: {
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
    request: FastifyRequest<UpdateResultadoByIdControllerRequest>,
    reply: FastifyReply,
  ) {
    const { userId } = request.params;
    const { resultado } = request.body;
    try {
      const updateQuizByIdRules = new UpdateQuizByIdRules();
      const quiz = await updateQuizByIdRules.execute(userId, resultado);

      return reply.send(quiz);
    } catch (error) {
      return reply.code(404).send(error);
    }
  }
}
