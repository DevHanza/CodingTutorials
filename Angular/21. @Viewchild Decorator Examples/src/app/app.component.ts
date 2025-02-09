import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewChildComponent } from "./view-child/view-child.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ViewChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '21';
}
