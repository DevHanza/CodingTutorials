import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckedLifecycleComponent } from "./checked-lifecycle/checked-lifecycle.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CheckedLifecycleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngAfterContentChecked';
}
