import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HostComponent } from "./host/host.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '25. ViewContainerRef for dynamic component loading in Angular.';
}
