import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { PasswordCheckerService } from '../services/password-checker.service';

@Component({
  selector: 'password-checker',
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

  setColor(n: number): string {
    const password = this.applyForm.value.password ?? '';
    return this.passwordCheckerService.setColor(password, n);
  }
  
}
