import { Component } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss']
})
export class CardFormComponent {
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
