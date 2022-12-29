import { PORT } from '@config/environment';
import { SwaggerOptions } from '@fastify/swagger';
import { Quiz } from '@modules/quiz/infra/knex/entities/Quiz';
import { User } from '@modules/user/infra/knex/entities/User';

const quiz = new Quiz();
const user = new User();

const tags = [quiz.className, user.className].map((tag) => ({
  name: tag,
  description: `${tag} Controller`,
}));

export const fastifySwagger = (): SwaggerOptions => ({
  swagger: {
    info: {
      title: 'Fastify documentation',
      description: 'This is swagger Quiz sample',
      version: '0.1.0',
    },
    host: `localhost:${PORT}`,
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags,
    definitions: {
      Quiz: quiz.Model(),
      User: user.Model(),
    },
  },
});
