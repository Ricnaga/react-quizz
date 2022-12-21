import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

type PostUserParams = Record<'email' | 'nome' | 'whatsapp', string>;

@Injectable({
  providedIn: 'root',
})
export class ApiQuestionService {
  baseURL = environment.domain;
  USER = `${this.baseURL}/user`;

  constructor(private httpclient: HttpClient) {}

  postUser(body: PostUserParams) {
    return this.httpclient.post(this.USER, body);
  }
}
