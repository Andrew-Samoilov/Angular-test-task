import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordChecker } from "./password-checker/password-checker.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordChecker],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-task';
}
