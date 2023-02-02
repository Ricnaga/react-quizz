import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IGetQuiz } from './api-score.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiScoreService {
  private baseURL = environment.domain;
  private QUIZ = `${this.baseURL}/quiz`;

  constructor(private httpclient: HttpClient) {}

  getQuiz(id: string) {
    return this.httpclient.get<IGetQuiz>(`${this.QUIZ}/${id}`);
  }
}
