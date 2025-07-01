import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from "./profile/profile.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Getters & Setters for @Input Properties';
}
