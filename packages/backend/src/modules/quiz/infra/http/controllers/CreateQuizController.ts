import { CreateQuizByIdRules } from '@modules/quiz/rules/CreateQuizByIdRules';
import { FastifyReply, FastifyRequest, RouteShorthandOptions } from 'fastify';

export interface CreateQuizControllerRequest {
  Body: Record<'resultado', string>;
}

export class CreateQuizByIdController {
  schema(): RouteShorthandOptions {
    return {
      schema: {
        tags: ['Quiz'],
        summary: 'Criar um quiz',
        description: 'Cria um resultado',
        body: {
          type: 'object',
          properties: {
            resultado: { type: 'string' },
          },
        },
        response: {
          201: {
            description: 'OK',
            type: 'object',
            properties: {
              message: { type: 'string' },
            },
          },
          404: {
            description: 'Created',
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
    request: FastifyRequest<CreateQuizControllerRequest>,
    reply: FastifyReply,
  ) {
    const { resultado } = request.body;
    try {
      const createQuizByIdRules = new CreateQuizByIdRules();
      await createQuizByIdRules.execute(resultado);

      return reply.send({ message: 'Quiz was successfuly created' });
    } catch (error) {
      return reply.code(404).send(error);
    }
  }
}
