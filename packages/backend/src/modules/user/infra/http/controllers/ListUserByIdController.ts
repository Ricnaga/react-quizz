import { ListUserByIdRules } from '@modules/user/rules/ListUserByIdRules';
import { FastifyReply, FastifyRequest, RouteShorthandOptions } from 'fastify';

export interface ListUserByIdControllerRequest {
  Params: { userId: string };
}

export class ListUserByIdController {
  schema(): RouteShorthandOptions {
    return {
      schema: {
        tags: ['User'],
        summary: 'Listar um usuário',
        description: 'Listar um usuário',
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
              nome: { type: 'string' },
              email: { type: 'string' },
              telefone: { type: 'string' },
              created_at: { type: 'string' },
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
    request: FastifyRequest<ListUserByIdControllerRequest>,
    reply: FastifyReply,
  ) {
    try {
      const listUserByIdController = new ListUserByIdRules();
      const user = await listUserByIdController.execute(request.params.userId);
      return reply.send(user);
    } catch (error) {
      return reply.code(404).send(error);
    }
  }
}
