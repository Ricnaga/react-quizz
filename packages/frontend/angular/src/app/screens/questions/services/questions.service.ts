import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HOME, SCORE } from 'src/app/app-routing.module';
import { questions } from 'src/app/config/data';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(private router: Router) {}

  public isStartQuestions(previousPage: number) {
    return previousPage < 0 ? true : false;
  }

  public isFinishQuestions(nextPage: number) {
    return nextPage >= questions.length ? true : false;
  }
}
