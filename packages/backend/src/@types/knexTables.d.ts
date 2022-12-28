import { Quiz as EntityQuiz } from '@modules/quiz/infra/knex/entities/Quiz';
import { User as EntityUser } from '@modules/user/infra/knex/entities/User';

declare module 'knex/types/tables' {
  type User = EntityUser;
  type Quiz = EntityQuiz;

  interface Tables {
    users: User;
    quiz: Quiz;
  }
}
