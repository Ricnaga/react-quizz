import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HOME, SCORE } from 'src/app/app-routing.module';
import { answers } from 'src/app/data/constants';
import { QuestionsType } from './questions.interface';
import { QuestionsService } from './services/questions/questions.service';

const PAGE_SIZE = 1;

@Component({
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  pageNumber = '0';
  paginateQuestions: Array<QuestionsType>;
  user: Record<'email' | 'nome' | 'telefone', string>;

  answervalue = answers;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private questionsService: QuestionsService,
  ) {
    this.user = {
      email: this.activatedRoute.snapshot.queryParams['email'],
      nome: this.activatedRoute.snapshot.queryParams['nome'],
      telefone: this.activatedRoute.snapshot.queryParams['telefone'],
    };
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
    if (
      this.questionsService.isFinishQuestions({
        nextPage,
        ...this.user,
      })
    ) {
      this.router.navigate([SCORE]);
      return;
    }

    this.nextQuestion = nextPage;

    this.router.navigate([], {
      queryParams: {
        page: nextPage,
        ...this.user,
      },
    });
  }
}
