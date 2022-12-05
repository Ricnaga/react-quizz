import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { PORT } from '../../../config/environment'
import { initMessage } from '../../../utils';
import { quizRoutes } from './routes/quiz.routes';
import { userRoutes } from './routes/user.routes';

const app = fastify({ logger: false })

app.register(fastifyCors)

app.register(quizRoutes, { prefix: "quiz" })
app.register(userRoutes, { prefix: "user" });

(async () => app.listen({ port: PORT })
    .then(() => initMessage(PORT))
    .catch((error) => process.exit(error)))()
