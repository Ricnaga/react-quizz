import { Component } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent {

  inputs = [
    {
      label: "E-mail",
      placeholder: "Seu e-mail"
    },
    {
      label: "Nome:",
      placeholder: "Sua resposta"
    },
    {
      label: "Telefone DDD+CELULAR 00 00000-0000:",
      placeholder: "Sua resposta"
    },
  ]

  radioValue = [
    {
      value: true,
      text: "Sim, sou maior de 18 anos",
    },
    {
      value: false,
      text: "Não",
    },
  ];

  onChange({ value }: MatRadioChange) {
    console.log(value)
  }
}
