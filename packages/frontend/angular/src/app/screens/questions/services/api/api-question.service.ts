import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

type PostUserParams = Record<
  'email' | 'nome' | 'telefone' | 'resultado',
  string
>;

@Injectable({
  providedIn: 'root',
})
export class ApiQuestionService {
  private baseURL = environment.domain;
  private USER = `${this.baseURL}/user`;

  constructor(private httpclient: HttpClient) {}

  postUser(body: PostUserParams) {
    return this.httpclient.post<{ message: string }>(this.USER, body);
  }
}
