import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckedLifecycleComponent } from "./checked-lifecycle/checked-lifecycle.component";
import { NestedComponentComponent } from "./nested-component/nested-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CheckedLifecycleComponent, NestedComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngAfterContentChecked';
}
