import { FastifyInstance } from "fastify";

export const userRoutes = async (app: FastifyInstance) => app.get('/', (req, res) => ({ hello: "USER" }))
