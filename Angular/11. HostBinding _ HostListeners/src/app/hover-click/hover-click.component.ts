import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-hover-click',
  imports: [],
  templateUrl: './hover-click.component.html',
  styleUrl: './hover-click.component.css'
})
export class HoverClickComponent {

  // NOT RECOMMENDED TO USE
  // These decorators exist exclusively for backwards compatibility.

  //Add a class="hovered" to Host Element
  @HostBinding('class.hovered') isHovered = true;

  @HostListener('click') onClick() {
    console.log("Host is Clicked.")
  }

}
