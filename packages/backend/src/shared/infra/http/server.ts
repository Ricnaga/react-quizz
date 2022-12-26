import { PORT } from '@config/environment';
import { fastifyCors } from '@fastify/cors';
import { initMessage } from '@utils';
import { fastify } from 'fastify';

import { initKnexDB } from '../knex/knexfile';
import { quizRoutes, userRoutes } from './routes';

const app = fastify({ logger: false });

app.register(fastifyCors);

app.register(quizRoutes, { prefix: 'quiz' });
app.register(userRoutes, { prefix: 'user' });

(async () =>
  app
    .listen({ port: PORT })
    .then(() => initMessage(PORT))
    .then(() => initKnexDB())
    .catch((error) => process.exit(error)))();
