import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoDirective, DemoUrl } from './demo.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DemoDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '52. ngTemplateContextGuard';


  demoString = "Demo String"

  demoUrl: DemoUrl = {
    url: 'https://example.com',
    video: true,
  };

  
}
