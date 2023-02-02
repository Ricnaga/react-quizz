import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { HOME, QUESTIONS } from 'src/app/app-routing.module';
import { IFormlyValues } from './home.interface';
import { FieldValidatorsService } from './services/field-validators.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private router: Router,
    private fieldValidatorsService: FieldValidatorsService,
  ) {}

  form = new FormGroup({});

  model = {};

  fields: Array<FormlyFieldConfig> = [
    {
      wrappers: ['card-form'],
      fieldGroup: [
        {
          key: 'email',
          type: 'input',
          validators: {
            email: {
              expression: this.fieldValidatorsService.email,
              message: () => 'Esse valor não é um e-mail',
            },
          },
          className: `${HOME}-screen__input`,
          props: {
            type: 'email',
            appearance: 'outline',
            label: 'E-mail',
            placeholder: 'Seu e-mail',
            required: true,
          },
        },
      ],
    },
    {
      wrappers: ['card-form'],
      fieldGroup: [
        {
          key: 'nome',
          type: 'input',
          validators: {
            nome: {
              expression: this.fieldValidatorsService.nome,
              message: () => 'Verifique novamente o campo nome',
            },
          },
          className: `${HOME}-screen__input`,
          props: {
            appearance: 'outline',
            label: 'Nome:',
            placeholder: 'Sua resposta',
            required: true,
          },
        },
      ],
    },
    {
      wrappers: ['card-form'],
      fieldGroup: [
        {
          key: 'telefone',
          type: 'input',
          validators: {
            telefone: {
              expression: this.fieldValidatorsService.telefone,
              message: () => 'Verifique novamente o campo telefone',
            },
          },
          className: `${HOME}-screen__input`,
          props: {
            type: 'tel',
            appearance: 'outline',
            label: 'Telefone DDD+CELULAR 00 00000-0000',
            placeholder: 'Sua resposta',
            required: true,
          },
        },
      ],
    },
    {
      key: 'maioridade',
      type: 'radio',
      wrappers: ['card-form'],
      validators: {
        maioridade: {
          expression: this.fieldValidatorsService.maioridade,
          message: () => 'Você precisa ser maior de 18',
        },
      },
      className: `${HOME}-screen__radio`,
      props: {
        required: true,
        options: [
          { value: true, label: 'Sim, sou maior de 18 anos' },
          { value: false, label: 'Não' },
        ],
      },
    },
  ];

  onSubmit(model: IFormlyValues | Record<symbol, symbol>) {
    if (this.form.valid)
      this.router.navigate([QUESTIONS], { queryParams: model });
  }
}
