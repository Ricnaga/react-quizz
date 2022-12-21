import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HOME, SCORE } from 'src/app/app-routing.module';
import { answers, questions } from 'src/app/config/data';
import { QuestionsService } from './services/questions.service';

const PAGE_SIZE = 1;

@Component({
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  pageNumber = '0';
  questionNumber = 0;
  paginateQuestions = new Array<string>();

  answervalue = answers.map((answer, index) => ({
    text: answer,
    value: index,
  }));

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private questionsService: QuestionsService,
  ) {}

  set nextQuestion(nextPageNumber: number) {
    const initialQuestion = nextPageNumber * PAGE_SIZE;
    const currentQuestion = initialQuestion + PAGE_SIZE;

    this.questionNumber = nextPageNumber;

    this.paginateQuestions = questions.slice(initialQuestion, currentQuestion);
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.pageNumber = params.get('page') ?? this.pageNumber;
    });

    this.nextQuestion = parseInt(this.pageNumber, 10);
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
      this.router.navigate([SCORE]);
      return;
    }

    this.nextQuestion = nextPage;

    this.router.navigate([], {
      queryParams: { page: nextPage },
    });
  }
}
