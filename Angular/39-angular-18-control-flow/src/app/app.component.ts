import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 18 Control Flow Explained';

  a = 20;
  b = 16;

  user$ = of([1,2,3,4]);

  items = ["Kamal", "Amal", "Anura", "Wenura"]
}
