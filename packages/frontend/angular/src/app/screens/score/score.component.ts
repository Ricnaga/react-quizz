import { Component, OnInit } from '@angular/core';
import { ApiScoreService } from './services/api-score.service';
import { IGetQuiz } from './services/api-score.interface';

@Component({
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  public data: IGetQuiz;
  constructor(private apiScoreService: ApiScoreService) {}

  ngOnInit(): void {
    this.apiScoreService.getQuiz('').subscribe((observer) => {
      this.data = observer;
    });
  }
}
