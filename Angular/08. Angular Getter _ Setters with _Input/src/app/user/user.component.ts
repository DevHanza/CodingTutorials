// 1. Example Usage in an Angular Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  private _username: string ='';

  // Getter
  get username(): string {
    console.log('Getter called');
    return this._username.toUpperCase();
  }

  // Setter
  set username(value: string) {
    console.log("Setter called with:", value);
    this._username = value.trim(); // Remove spaces

  }

  constructor() {
    this.username = ' JohnDoe '; // Setter gets triggered
    console.log(this.username); // Getter gets triggered
  }


}
