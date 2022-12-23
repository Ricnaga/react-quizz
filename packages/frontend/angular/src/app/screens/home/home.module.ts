import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CardDescriptionComponent } from './components/card-description/card-description.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CardFormComponent } from './components/card-form/card-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

const routes: Routes = [{ path: '', component: HomeComponent }];
const formlyConfig: ConfigOption = {
  validationMessages: [
    { name: 'required', message: 'Esse campo é obrigatório' },
  ],
  wrappers: [{ name: 'card-form', component: CardFormComponent }],
};

@NgModule({
  declarations: [HomeComponent, CardDescriptionComponent, CardFormComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule.forRoot(formlyConfig),
    RouterModule.forChild(routes),
  ],
})
export class HomeModule {}
