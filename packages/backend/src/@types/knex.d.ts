import { Quiz as EntityQuiz } from '@modules/quiz/infra/knex/entities/Quiz';
import { User as EntityUser } from '@modules/user/infra/knex/entities/User';

import { KnexEntity } from '@shared/infra/knex/knexfile';

type User = EntityUser;
type Quiz = EntityQuiz;

declare module 'knex/types/tables' {
  interface Tables {
    users: KnexEntity<User>;
    quiz: KnexEntity<Quiz>;
  }
}
