import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-comp',
  imports: [FormsModule],
  templateUrl: './my-comp.component.html',
  styleUrl: './my-comp.component.css'
})
export class MyCompComponent {

  name: string = "Hellow World";

  // Runs every time the component's inputs have changed.
  ngOnChanges() {
    console.log("ngOnChanges.")
  }

  // Runs every time this component is checked for changes.
  ngDoCheck() {
    console.log("ngDoCheck.");
  }



}
