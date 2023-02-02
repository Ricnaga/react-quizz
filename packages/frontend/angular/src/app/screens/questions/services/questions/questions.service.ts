import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ApiQuestionService } from '../api/api-question.service';
import { questionData } from './questions.config';
import {
  IsFinishQuestionsType,
  QuestionsType,
} from '../../questions.interface';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  questions: Array<QuestionsType>;

  constructor(
    private router: Router,
    private apiQuestionService: ApiQuestionService,
  ) {
    this.questions = questionData.map((question, index) => ({
      title: question,
      value: 0,
      questionNumber: index,
    }));
  }

  public isStartQuestions(previousPage: number) {
    return previousPage < 0 ? true : false;
  }

  public isFinishQuestions({ nextPage, ...data }: IsFinishQuestionsType) {
    if (nextPage >= questionData.length) {
      const resultado = this.questions
        .reduce((acc, current) => acc + current.value, 0)
        .toString();

      this.apiQuestionService
        .postUser({ ...data, resultado })
        .subscribe({
          next: () =>
            this.router.navigate([], {
              queryParams: { page: nextPage },
            }),
          error: (error) => throwError(() => new Error(`Erro: ${error}`)),
        })
        .unsubscribe();
      return true;
    }

    return false;
  }
}
