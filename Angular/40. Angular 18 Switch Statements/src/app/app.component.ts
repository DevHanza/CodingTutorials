import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '40. Angular 18 Switch Statements';

  // items = []
  items = ["Kamal", "Amal", "Anura", "Wenura"]

  userRole = 'admin';
}
