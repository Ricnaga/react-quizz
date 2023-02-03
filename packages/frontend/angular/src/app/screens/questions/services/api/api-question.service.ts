import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

type PostUserParams = Record<
  'email' | 'nome' | 'telefone' | 'resultado',
  string
>;

interface PostUserResponse {
  id: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiQuestionService {
  private baseURL = environment.domain;
  private USER = `${this.baseURL}/user`;

  constructor(
    private httpclient: HttpClient,
    private matSnackBar: MatSnackBar,
  ) {}

  postUser(body: PostUserParams): Observable<PostUserResponse> {
    return this.httpclient.post<PostUserResponse>(this.USER, body).pipe(
      catchError<PostUserResponse, Observable<PostUserResponse>>((response) => {
        const { error } = response as HttpErrorResponse;
        this.matSnackBar.open(error.message, 'X', {
          horizontalPosition: 'left',
          verticalPosition: 'bottom',
          duration: 5000,
        });
        return response;
      }),
    );
  }
}
