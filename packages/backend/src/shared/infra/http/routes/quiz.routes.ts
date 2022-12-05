import { FastifyInstance } from "fastify";

export const quizRoutes = async (app: FastifyInstance) => app
    .get('/:userId', (request, response) =>
        response.send({
            nome: 'Fulano',
            resultado: '12',
        }))
