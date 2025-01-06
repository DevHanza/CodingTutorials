import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-constructor',
  imports: [],
  templateUrl: './angular-constructor.component.html',
  styleUrl: './angular-constructor.component.css',
})
export class AngularConstructorComponent {
  name: string = 'Old Name';

  constructor() {
    this.name = 'New Name';
  }
}
