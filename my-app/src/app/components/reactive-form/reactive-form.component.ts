import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthComponent } from '../password-strength/password-strength.component';

@Component({
  selector: 'reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, PasswordStrengthComponent],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  public formGroup = new FormGroup({
    password2: new FormControl('')
  });
}
