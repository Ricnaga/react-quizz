import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from './score.interface';
import { ApiScoreService } from './services/api-score.service';

@Component({
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  public data!: Data;
  public userId: string;

  constructor(
    private apiScoreService: ApiScoreService,
    private route: ActivatedRoute,
  ) {
    this.userId = this.route.snapshot.params['userId'];
    this.data = { nome: '', resultado: '0' };
  }

  ngOnInit(): void {
    this.apiScoreService.getUser(this.userId).subscribe((response) => {
      this.data.nome = response.nome;
    });

    this.apiScoreService.getQuiz(this.userId).subscribe((response) => {
      this.data.resultado = response.resultado;
    });
  }
}
