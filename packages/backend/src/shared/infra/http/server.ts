import { PORT } from '@config/environment';
import { fastifyCors } from '@fastify/cors';
import { initMessage } from '@utils';
import { fastify } from 'fastify';

import { initKnexDB } from '../knex/knexfile';
import { quizRoutes, userRoutes } from './routes';
import { fastifySwagger } from './swagger';

export enum PrefixRoutes {
  QUIZ = 'quiz',
  USER = 'user',
  SWAGGER = 'swagger',
}

const app = fastify({ logger: false });

app
  .register(fastifyCors)
  .register(import('@fastify/swagger'), fastifySwagger)
  .register(import('@fastify/swagger-ui'), {
    routePrefix: PrefixRoutes.SWAGGER,
  })
  .register(quizRoutes, { prefix: PrefixRoutes.QUIZ })
  .register(userRoutes, { prefix: PrefixRoutes.USER });

(async () =>
  app
    .listen({ port: PORT })
    .then(() => initMessage(PORT, PrefixRoutes.SWAGGER))
    .then(() => initKnexDB())
    .catch((error) => {
      app.log.error(error);
      process.exit(error);
    }))();
