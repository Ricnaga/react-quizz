import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGetQuiz, IGetUser } from '../score.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiScoreService {
  private baseURL = environment.domain;
  private QUIZ = `${this.baseURL}/quiz`;
  private USER = `${this.baseURL}/user`;

  constructor(private httpclient: HttpClient) {}

  getQuiz(id: string): Observable<IGetQuiz> {
    return this.httpclient.get<IGetQuiz>(`${this.QUIZ}/${id}`);
  }

  getUser(id: string): Observable<IGetUser> {
    return this.httpclient.get<IGetUser>(`${this.USER}/${id}`);
  }
}
