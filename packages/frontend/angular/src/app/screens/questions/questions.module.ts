import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

const routes: Routes = [{ path: '', component: QuestionsComponent }]

@NgModule({
  declarations: [QuestionsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    RouterModule.forChild(routes)
  ]
})
export class QuestionsModule { }
