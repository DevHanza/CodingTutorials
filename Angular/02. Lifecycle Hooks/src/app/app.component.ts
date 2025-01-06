import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularConstructorComponent } from './angular-constructor/angular-constructor.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AngularConstructorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'LifeCyleHooks';
}
