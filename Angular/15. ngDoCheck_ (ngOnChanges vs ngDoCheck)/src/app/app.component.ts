import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCompComponent } from "./my-comp/my-comp.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '11';
}
