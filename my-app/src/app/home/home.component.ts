import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  applyForm = new FormGroup({
    password: new FormControl(''),
  });

  submitForm() {
    console.log(this.applyForm.value.password ?? '');
  }

  inputForm() {
    // console.log(`input`, this.applyForm.value.password ?? '', this.checkPasswordStrength(this.applyForm.value.password ?? ''));
  }

  checkPasswordStrength(password: string): string {
    if (password.length === 0) {
      return ``;
    } else if (password.length < 8) {
      return `less8`;
    } else {
      // Check password strength
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasDigits = /\d/.test(password);
      const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      if (hasLetters && hasDigits && hasSymbols) {
        return 'strong';
      } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
        return 'medium';
      } else {
        return 'easy';
      }
    }

  }

  setColor(n: number): string {
    let color1 = 'LightGray';
    let color2 = 'LightGray';
    let color3 = 'LightGray';

    if (this.applyForm.value.password?.length === 0) {
      color1 = 'LightGray';
      color2 = 'LightGray';
      color3 = 'LightGray';
    }

    const PASSWORDsTRENGTH = this.checkPasswordStrength(this.applyForm.value.password ?? '');

    switch (PASSWORDsTRENGTH) {
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
        color1 = 'MediumSpringGreen';
        color2 = 'MediumSpringGreen';
        color3 = 'MediumSpringGreen';
        break;
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
