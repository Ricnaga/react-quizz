import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { questions } from 'src/app/data/constants';
import { ApiQuestionService } from '../api/api-question.service';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(
    private router: Router,
    private apiQuestionService: ApiQuestionService,
  ) {}

  public isStartQuestions(previousPage: number) {
    return previousPage < 0 ? true : false;
  }

  public isFinishQuestions(nextPage: number) {
    if (nextPage >= questions.length) {
      this.apiQuestionService
        .postUser({ email: '', nome: '', whatsapp: '' })
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
