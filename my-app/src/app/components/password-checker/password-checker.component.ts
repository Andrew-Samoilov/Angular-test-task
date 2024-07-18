import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PasswordCheckerService } from '../../services/password-checker.service';
import { PasswordStrengthComponent } from '../password-strength/password-strength.component';

@Component({
  selector: 'password-checker',
  standalone: true,
  imports: [ReactiveFormsModule, PasswordStrengthComponent],
  templateUrl: './password-checker.component.html',
  styleUrl: './password-checker.component.css'
})

export class PasswordChecker {
  applyForm = new FormGroup({
    password: new FormControl(''),
  });

  constructor(private passwordCheckerService: PasswordCheckerService) { }

}
