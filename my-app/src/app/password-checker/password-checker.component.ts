import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { PasswordCheckerService } from '../services/password-checker.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, NgStyle],
  templateUrl: './password-checker.component.html',
  styleUrl: './password-checker.component.css'
})

export class PasswordChecker {
  applyForm = new FormGroup({
    password: new FormControl(''),
  });

  constructor(private passwordCheckerService: PasswordCheckerService) { }

  inputForm() {
    console.log(`input`, this.applyForm.value.password ?? '', this.passwordCheckerService.checkPasswordStrength(this.applyForm.value.password ?? ''));
  }

  setColor(n: number): string {
    let color1 = '';
    let color2 = '';
    let color3 = '';

    if (this.applyForm.value.password?.length === 0) {
      color1 = 'LightGray';
      color2 = 'LightGray';
      color3 = 'LightGray';
    }

    const PASSWORD_STRENGTH = this.passwordCheckerService.checkPasswordStrength(this.applyForm.value.password ?? '');

    switch (PASSWORD_STRENGTH) {
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
