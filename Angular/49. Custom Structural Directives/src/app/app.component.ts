import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HasPermissionDirective } from './has-permission.directive';
import { DynamicListDirective } from './dynamic-list.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HasPermissionDirective, DynamicListDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = '49. Custom Structural Directives';

  items = [{ name: 'Leela' }, { name: 'Angular' }];
}
