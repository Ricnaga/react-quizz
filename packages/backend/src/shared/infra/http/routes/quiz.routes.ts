import { FastifyInstance } from 'fastify';

export const quizRoutes = async (app: FastifyInstance) => {
  app.get(
    '/:userId',
    {
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
    },
    (request, response) =>
      response.send({
        nome: 'Fulano',
        resultado: '12',
      }),
  );
};
