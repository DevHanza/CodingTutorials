import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AfterRenderComponent } from './after-render/after-render.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AfterRenderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '19. afterRender & afterNextRender Lifecycle Hooks';
}
