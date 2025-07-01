import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewChildExampleComponent } from "./view-child-example/view-child-example.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ViewChildExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '@ViewChild in Angular';
}
