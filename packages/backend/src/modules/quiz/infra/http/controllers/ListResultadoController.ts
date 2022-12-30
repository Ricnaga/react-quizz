import { FastifyReply, FastifyRequest, RouteShorthandOptions } from 'fastify';

export class ListResultadoController {
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
              nome: { type: 'string' },
              resultado: { type: 'string' },
            },
          },
        },
      },
    };
  }

  async handler(request: FastifyRequest, reply: FastifyReply) {
    return reply.send({
      nome: 'Fulano',
      resultado: '12',
    });
  }
}
