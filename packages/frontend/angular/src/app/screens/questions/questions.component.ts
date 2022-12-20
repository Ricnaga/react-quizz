import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { answers, questions } from 'src/app/config/data';

const PAGE_SIZE = 1

@Component({
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})

export class QuestionsComponent implements OnInit{
  pageNumber = '0'
  paginateQuestions = new Array<string>();
  
  answervalue = answers.map((answer, index) => ({text:answer, value:index}))

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
) { }

  ngOnInit(){
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.pageNumber = params.get('page') ?? this.pageNumber;
    })
  }

  onPrevious(){
    const queryParams: Params = { page: parseInt(this.pageNumber,10) - 1};
    this.paginateQuestions = questions.slice((parseInt(this.pageNumber,10)*PAGE_SIZE),(parseInt(this.pageNumber,10)*PAGE_SIZE)+PAGE_SIZE)
  this.router.navigate(
    [], 
    {      
      queryParams, 
    });
  }
  
  onNext(){
    const queryParams: Params = { page: parseInt(this.pageNumber,10) + 1};
    this.paginateQuestions = questions.slice((parseInt(this.pageNumber,10)*PAGE_SIZE),(parseInt(this.pageNumber,10)*PAGE_SIZE)+PAGE_SIZE)
  this.router.navigate(
    [], 
    {      
      queryParams, 
    });
  }
}
