import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  form = new FormGroup({});

  model = {};

  fields: Array<FormlyFieldConfig> = [
    {
      key: 'email',
      wrappers: ['card-form'],
      fieldGroup: [
        {
          key: 'email-input',
          type: 'input',
          props: {
            "appearance": "outline",
            label: "E-mail",
            placeholder: "Seu e-mail",
            required: true,
          }
        },
      ],
    },
    {
      key: 'nome',
      wrappers: ['card-form'],
      fieldGroup: [
        {
          key: 'nome-input',
          type: 'input',
          props: {
            "appearance": "outline",
            label: "Nome:",
            placeholder: "Sua resposta",
            required: true,
          }
        },
      ]
    },
    {
      key: 'telefone',
      wrappers: ['card-form'],
      fieldGroup: [
        {
          key: 'telefone-input',
          type: 'input',
          props: {
            "appearance": "outline",
            label: "Telefone DDD+CELULAR 00 00000-0000",
            placeholder: "Sua resposta",
            required: true,
          }
        },
      ],
    },
    {
      key: 'Radio',
      type: 'radio',
      wrappers: ['card-form'],
      props: {
        required: true,
        options: [
          { value: true, label: 'Sim, sou maior de 18 anos' },
          { value: false, label: 'Não' },
        ],
      },
    },
  ];

  onSubmit(model: any) {
    console.log(model)
  }

}
