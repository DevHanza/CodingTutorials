import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  message: string = "Hello from Child Component.";

  showMessage() {
    alert(this.message);
  }

}
