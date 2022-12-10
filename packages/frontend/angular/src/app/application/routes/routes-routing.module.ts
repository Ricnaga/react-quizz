import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOME, QUESTIONS, SCORE } from './paths';

const rootRoutes: Routes = [
  { path: '', redirectTo: HOME, pathMatch: 'full' }
];

const childRoutes: Routes = [
  {
    path: HOME,
    loadChildren: () => import('../../screens/home/home.module')
      .then(({ HomeModule }) => HomeModule)
  },
  {
    path: QUESTIONS,
    loadChildren: () => import('../../screens/questions/questions.module')
      .then(({ QuestionsModule }) => QuestionsModule)
  },
  {
    path: SCORE,
    loadChildren: () => import('../../screens/score/score.module')
      .then(({ ScoreModule }) => ScoreModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(rootRoutes),
    RouterModule.forChild(childRoutes)
  ],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
