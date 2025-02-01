import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanelComponent } from "./panel/panel.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PanelComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Send Custom Events Using @Output Decorator.';
  recievedDataFromChild = '';

  dataRecieved(data: string) {
    this.recievedDataFromChild = data;
  }
}
