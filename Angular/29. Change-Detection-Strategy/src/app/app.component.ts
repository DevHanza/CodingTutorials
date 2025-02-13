import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildDefaultComponent } from "./child-default/child-default.component";
import { ChildOnpushComponent } from "./child-onpush/child-onpush.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildDefaultComponent, ChildOnpushComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Change Detection Strategy: Default vs. onPush';
}
