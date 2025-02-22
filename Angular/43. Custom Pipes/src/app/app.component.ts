import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetPipe } from './greet.pipe';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GreetPipe, ExponentialStrengthPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '43. Custom Pipes in Angular';
}
