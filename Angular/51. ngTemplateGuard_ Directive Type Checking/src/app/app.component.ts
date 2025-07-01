import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Animal, IsDogDirective } from './is-dog.directive';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IsDogDirective, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '51. ngTemplateGuard: Directive Type Checking';

  animal: Animal = {
    name: 'dog name',
    breed: 'dsdsd',
    type: 'dog',
  }

  
}
