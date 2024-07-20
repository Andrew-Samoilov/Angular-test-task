import { Component } from '@angular/core';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
// import { CvaComponent } from './components/cva/cva.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular test task';
}
