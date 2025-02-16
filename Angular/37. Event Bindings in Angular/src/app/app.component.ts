import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '37-Angular-Event-Bindings';

  onClick(e: MouseEvent) {
    console.log(e)
    console.log("Clicked.");
  }

  onKeyDown(e: Event) {
    console.log("Pressed a Key.");
    console.log(e);
  }

  onShiftTPressd(e: Event) {
    alert("Shift + T is Pressed");
  }
}
