import { Injectable } from '@angular/core';
import { QuestionsType } from '../../questions.interface';
import { questionData } from './questions.config';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  questions: Array<QuestionsType>;

  constructor() {
    this.questions = questionData.map((question, index) => ({
      title: question,
      value: 0,
      questionNumber: index,
    }));
  }

  public isStartQuestions(previousPage: number): boolean {
    return previousPage < 0 ? true : false;
  }

  public isFinishQuestions(nextPage: number): boolean {
    return nextPage >= questionData.length ? true : false;
  }
}
