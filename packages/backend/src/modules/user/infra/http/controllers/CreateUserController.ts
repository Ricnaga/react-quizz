import { CreateUserRules } from '@modules/user/rules/CreateUserRules';
import { FastifyReply, FastifyRequest, RouteShorthandOptions } from 'fastify';

import { PostRequestBody } from '@shared/infra/http/routes';

export class CreateUserController {
  schema(): RouteShorthandOptions {
    return {
      schema: {
        description: 'post some data',
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
        },
      },
    };
  }

  async handler(
    { body }: FastifyRequest<PostRequestBody>,
    reply: FastifyReply,
  ) {
    try {
      const { email, nome, whatsapp } = body;
      const createUserRules = new CreateUserRules();
      const userId = await createUserRules.execute({ email, nome, whatsapp });

      return reply.send(userId);
    } catch (error) {
      return reply.code(404).send(error);
    }
  }
}
