import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LifecycleCheckedComponent } from "./lifecycle-checked/lifecycle-checked.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LifecycleCheckedComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngAfterViewChecked in Angular';
}
