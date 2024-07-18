import { Injectable } from '@angular/core';
import { HAS_LETTERS, HAS_DIGITS, HAS_SYMBOLS } from './password-regex';

@Injectable({
  providedIn: 'root'
})
export class PasswordCheckerService {

  constructor() { }

  checkPasswordStrength(password: string): string {
    if (password.length === 0) {
      return ``;
    } else if (password.length < 8) {
      return `less8`;
    } else {
      // Check password strength
      const hasLetters = HAS_LETTERS.test(password);
      const hasDigits = HAS_DIGITS.test(password);
      const hasSymbols = HAS_SYMBOLS.test(password);

      if (hasLetters && hasDigits && hasSymbols) {
        return 'strong';
      } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
        return 'medium';
      } else {
        return 'easy';
      }
    }
  }

  setColor(password: string, n: number): string {
    let color1 = '';
    let color2 = '';
    let color3 = '';

    if (password.length === 0) {
      color1 = 'LightGray';
      color2 = 'LightGray';
      color3 = 'LightGray';
    }

    switch (this.checkPasswordStrength(password)) {
      case `less8`:
        color1 = 'red';
        color2 = 'red';
        color3 = 'red';
        break;
      case `easy`:
        color1 = 'red';
        break;
      case `medium`:
        color1 = 'yellow';
        color2 = 'yellow';
        break;
      case `strong`:
        return 'MediumSpringGreen';
    }

    switch (n) {
      case 1:
        return color1;
      case 2:
        return color2;
      case 3:
        return color3;
      default:
        return 'gray';
    }

  }

}
