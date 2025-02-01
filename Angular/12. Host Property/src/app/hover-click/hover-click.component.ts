import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-hover-click',
  imports: [],
  templateUrl: './hover-click.component.html',
  styleUrl: './hover-click.component.css',
  host: {
    '[class.hovered]': 'isHovered',
    '[id]': 'myid',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(click)': 'onClick()',
  }
})
export class HoverClickComponent {

  // RECOMMENDED to use :host
  // Go to the CSS File

  isHovered = false;

  onClick() {
    console.log('element clicked');
  }

  onMouseEnter() {
    this.isHovered = true;
  }
  
  onMouseLeave() {
    this.isHovered = true;
  }

}
