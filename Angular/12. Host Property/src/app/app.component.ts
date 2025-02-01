import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HoverClickComponent } from './hover-click/hover-click.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HoverClickComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = ':host property in Angular';
}
