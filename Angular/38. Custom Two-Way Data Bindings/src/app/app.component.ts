import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SizerComponent } from "./sizer/sizer.component";
import { Sizer2Component } from "./sizer2/sizer2.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SizerComponent, Sizer2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '38. Custom Two-Way Data Binding in Angular';

  fontSizePx = 16;
}
