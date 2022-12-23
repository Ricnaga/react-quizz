import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScoreComponent } from './score.component';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [{ path: '', component: ScoreComponent }];

@NgModule({
  declarations: [ScoreComponent],
  imports: [CommonModule, MatCardModule, RouterModule.forChild(routes)],
})
export class ScoreModule {}
