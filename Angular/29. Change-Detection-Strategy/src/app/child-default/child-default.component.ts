import { Component } from '@angular/core';

@Component({
  selector: 'app-child-default',
  imports: [],
  templateUrl: './child-default.component.html',
  styleUrl: './child-default.component.css',
})
export class ChildDefaultComponent {
  count: number = 0;

  constructor() {
    setInterval(() => {
      this.count++;
    }, 1000);
  }
}
