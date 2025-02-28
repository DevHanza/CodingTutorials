import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ShowIfDirective } from './show-if.directive';
import { RepeatTimeDirective } from './repeat-time.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ShowIfDirective, RepeatTimeDirective, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '50. Custom Structural Directive (Deep Dive)';

  isVisible = true;
  count = 3;
}
