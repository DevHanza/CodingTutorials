import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'Angular-Lifecycle-Hooks';
  visible = true;

  constructor() {
    console.log("Constructor ran.")
  }

  ngOnInit() {
    console.log("ngOnInit ran once.")
  }

  ngOnChanges() {

  }

  ngOnDestroy() {
    
  }


  destroyAppComponenet() {
    this.visible = false;
  }

}
