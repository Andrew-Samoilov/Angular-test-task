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
    } else if (HAS_LETTERS && HAS_DIGITS && HAS_SYMBOLS) {
      return 'strong';
    } else if ((HAS_LETTERS && HAS_DIGITS) || (HAS_LETTERS && HAS_SYMBOLS) || (HAS_DIGITS && HAS_SYMBOLS)) {
      return 'medium';
    } else {
      return 'easy';
    }

  }

}
