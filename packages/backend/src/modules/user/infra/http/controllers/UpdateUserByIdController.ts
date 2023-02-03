import { UpdateUserByIdRules } from '@modules/user/rules/UpdateUserByIdRules';
import { FastifyReply, FastifyRequest, RouteShorthandOptions } from 'fastify';

export interface UpdateUserByIdControllerRequest {
  Params: { userId: string };
  Body: Record<'email' | 'nome' | 'telefone', string>;
}

export class UpdateUserByIdController {
  schema(): RouteShorthandOptions {
    return {
      schema: {
        tags: ['User'],
        summary: 'Atualizar usuário',
        description: 'Atualiza informações de um detemrinado usuário',
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
            nome: { type: 'string' },
            telefone: { type: 'string' },
            email: { type: 'string', format: 'email' },
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
    request: FastifyRequest<UpdateUserByIdControllerRequest>,
    reply: FastifyReply,
  ) {
    const { userId } = request.params;
    const { email, nome, telefone } = request.body;
    try {
      const updateUserByIdRules = new UpdateUserByIdRules();
      const user = await updateUserByIdRules.execute({
        user_id: userId,
        email,
        nome,
        telefone,
      });
      return reply.send(user);
    } catch (error) {
      return reply.code(404).send(error);
    }
  }
}
