import { Component } from '@angular/core';
import { PasswordChecker } from "./password-checker/password-checker.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ PasswordChecker],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-task';
}
