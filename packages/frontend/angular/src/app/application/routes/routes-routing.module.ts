import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/screens/home/home.component';
import { QuestionsComponent } from 'src/app/screens/questions/questions.component';
import { ScoreComponent } from 'src/app/screens/score/score.component';
import { HOME, QUESTIONS, SCORE } from './paths';

const rootRoutes: Routes = [
  { path: '', redirectTo: HOME, pathMatch: 'full' }
];

const childRoutes: Routes = [
  { path: HOME, component: HomeComponent },
  { path: QUESTIONS, component: QuestionsComponent },
  { path: SCORE, component: ScoreComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(rootRoutes),
    RouterModule.forChild(childRoutes)
  ],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
