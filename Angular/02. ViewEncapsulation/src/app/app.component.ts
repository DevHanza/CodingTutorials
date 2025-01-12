import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // Emulated (Default) 
  // The styles are only applied to the current compoenents.
  encapsulation: ViewEncapsulation.Emed,

  // ShadowDOM
  // 
  // encapsulation: ViewEncapsulation.ShadowDom,

  // None
  // All the styles will be applied Globally.
  // encapsulation: ViewEncapsulation.None,
})


export class AppComponent {
  title = 'ViewEncapsulation';
}
