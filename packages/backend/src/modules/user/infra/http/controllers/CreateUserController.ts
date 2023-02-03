import { CreateUserRules } from '@modules/user/rules/CreateUserRules';
import { FastifyReply, FastifyRequest, RouteShorthandOptions } from 'fastify';

export interface CreateUserControllerRequest {
  Body: Record<'email' | 'nome' | 'telefone' | 'resultado', string>;
}

export class CreateUserController {
  schema(): RouteShorthandOptions {
    return {
      schema: {
        summary: 'Criar um usuário',
        description: 'Cria um usuário',
        tags: ['User'],
        body: {
          type: 'object',
          properties: {
            nome: { type: 'string' },
            telefone: { type: 'string' },
            email: { type: 'string', format: 'email' },
          },
        },
        response: {
          201: {
            description: 'Created',
            type: 'object',
            properties: {
              id: { type: 'string' },
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
    { body }: FastifyRequest<CreateUserControllerRequest>,
    reply: FastifyReply,
  ) {
    try {
      const { email, nome, telefone, resultado } = body;
      const createUserRules = new CreateUserRules();
      const userId = await createUserRules.execute({
        email,
        nome,
        telefone,
        resultado,
      });

      return reply.send(userId);
    } catch (error) {
      return reply.code(404).send(error);
    }
  }
}
