import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { CounterComponent } from "./counter/counter.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngAfterViewInit & ngAfterContentInit';

    
}
