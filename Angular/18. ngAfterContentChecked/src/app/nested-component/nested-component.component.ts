import { Component } from '@angular/core';

@Component({
  selector: 'app-nested-component',
  imports: [],
  templateUrl: './nested-component.component.html',
  styleUrl: './nested-component.component.css'
})
export class NestedComponentComponent {

  counter = 0;

  increment() {
    this.counter++;
  }

}
