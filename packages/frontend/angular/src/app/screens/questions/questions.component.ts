import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HOME, SCORE } from 'src/app/app-routing.module';
import { answers } from 'src/app/data/constants';
import { QuestionsType, User } from './questions.interface';
import { ApiQuestionService } from './services/api/api-question.service';
import { QuestionsService } from './services/questions/questions.service';

const PAGE_SIZE = 1;

@Component({
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  pageNumber: string;
  lastQuestion: string;
  paginateQuestions: Array<QuestionsType>;
  user: User;
  answervalue: Array<string>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private questionsService: QuestionsService,
    private apiQuestionService: ApiQuestionService,
  ) {
    this.pageNumber = '0';
    this.user = {
      email: this.activatedRoute.snapshot.queryParams['email'],
      nome: this.activatedRoute.snapshot.queryParams['nome'],
      telefone: this.activatedRoute.snapshot.queryParams['telefone'],
    };
    this.answervalue = answers;
    this.lastQuestion = (this.questionsService.questions.length - 1).toString();
  }

  set nextQuestion(nextPageNumber: number) {
    const initialQuestion = nextPageNumber * PAGE_SIZE;
    const currentQuestion = initialQuestion + PAGE_SIZE;

    this.paginateQuestions = this.questionsService.questions.slice(
      initialQuestion,
      currentQuestion,
    );
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.pageNumber = params.get('page') ?? this.pageNumber;
    });

    this.nextQuestion = parseInt(this.pageNumber, 10);
  }

  onChange(answer: number, questionNumber: number) {
    this.questionsService.questions[questionNumber].value = answer;
  }

  onPrevious() {
    const previousPage = parseInt(this.pageNumber, 10) - 1;

    if (this.questionsService.isStartQuestions(previousPage)) {
      this.router.navigate([HOME]);
      return;
    }

    this.nextQuestion = previousPage;

    this.router.navigate([], {
      queryParams: { page: previousPage },
    });
  }

  onNext() {
    const nextPage = parseInt(this.pageNumber, 10) + 1;
    if (this.questionsService.isFinishQuestions(nextPage)) {
      const resultado = this.questionsService.questions
        .reduce((acc, current) => acc + current.value, 0)
        .toString();

      this.apiQuestionService
        .postUser({ ...this.user, resultado })
        .subscribe(({ id }) =>
          this.router.navigate([SCORE.replace(':userId', id)]),
        );
      return;
    }

    this.nextQuestion = nextPage;

    this.router.navigate([], {
      queryParams: {
        page: nextPage,
      },
    });
  }
}
