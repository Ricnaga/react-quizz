import { Component } from '@angular/core';
import { answers } from 'src/app/data/constants';

@Component({
  selector: 'app-card-description',
  templateUrl: './card-description.component.html',
  styleUrls: ['./card-description.component.scss'],
})
export class CardDescriptionComponent {
  items: Array<string> = [
    'Identificado os sintomas de ansiedade, depressão e estresse.',
    'Identificar o Nível que você se encontra.',
  ];

  cardAnswers: Array<string> = answers;
}
