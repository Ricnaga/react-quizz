import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FieldValidatorsService {
  constructor() {}

  email(control: AbstractControl): boolean {
    const value = String(control.value);
    if (value.indexOf('@') < 5) return false;
    if (value.lastIndexOf('.') <= value.indexOf('@') + 2) return false;
    if (value.lastIndexOf('.') === value.length - 1) return false;

    return true;
  }

  nome(control: AbstractControl): boolean {
    const value = String(control.value);

    if (value.length < 4) return false;

    return true;
  }

  telefone(control: AbstractControl): boolean {
    const value = String(control.value);
    if (value.length < 11) return false;
    if (value.match(/D/g)) return false;
    return true;
  }

  maioridade(control: AbstractControl): boolean {
    return !!control.value;
  }
}
