import { Component } from '@angular/core';
import { ColorDirective } from '../color.directive';
import { BackgroundColorDirective } from '../background-color.directive';

@Component({
  selector: 'app-widget',
  imports: [],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css',
  hostDirectives: [
    {
      directive: ColorDirective,
      inputs: ['color: textColor'],
      outputs: ['colorChanged: changeColor'],
    },
    BackgroundColorDirective,
  ],
})
export class WidgetComponent {}
