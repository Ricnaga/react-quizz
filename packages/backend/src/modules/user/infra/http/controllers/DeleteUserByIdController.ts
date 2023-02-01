import { DeleteUserByIdRules } from '@modules/user/rules/DeleteUserByIdRules ';
import { FastifyReply, FastifyRequest, RouteShorthandOptions } from 'fastify';

export interface DeleteUserByIdControllerRequest {
  Params: { userId: string };
}

export class DeleteUserByIdController {
  schema(): RouteShorthandOptions {
    return {
      schema: {
        tags: ['User'],
        summary: 'Apagar um usuário',
        description: 'Remove um usuário',
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
    request: FastifyRequest<DeleteUserByIdControllerRequest>,
    reply: FastifyReply,
  ) {
    try {
      const deleteUserByIdRules = new DeleteUserByIdRules();
      const user = await deleteUserByIdRules.execute(request.params.userId);
      return reply.send(user);
    } catch (error) {
      return reply.code(404).send(error);
    }
  }
}
