import { FastifyReply, FastifyRequest, RouteShorthandOptions } from 'fastify';

import { UserRequestBody } from '@shared/infra/http/routes';

export class CreateUser {
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
    { body }: FastifyRequest<UserRequestBody>,
    reply: FastifyReply,
  ) {
    const { email, nome, whatsapp } = body;
    return reply.send({ id: '221' });
  }
}
