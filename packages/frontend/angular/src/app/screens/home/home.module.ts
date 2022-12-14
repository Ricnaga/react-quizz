import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CardDescriptionComponent } from './components/card-description/card-description.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule, } from '@angular/material/list';

const routes: Routes = [{ path: '', component: HomeComponent }]

@NgModule({
  declarations: [HomeComponent, CardDescriptionComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
