import { FastifyInstance } from "fastify";

export const quizRoutes = async (app: FastifyInstance) => app.get('/', (req, res) => ({ hello: "QUIZ" }))
