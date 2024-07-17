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
}
