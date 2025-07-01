import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WidgetComponent } from './widget/widget.component';
// import { ColorDirective } from "./color.directive";
// import { BackgroundColorDirective } from "./background-color.directive";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    WidgetComponent, 
    // ColorDirective, 
    // BackgroundColorDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  doSomething() {
    console.log(`Event fired. 🔥`);
  }

}
