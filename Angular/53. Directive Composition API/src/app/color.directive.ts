import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  renderer = inject(Renderer2);
  hostEl = inject(ElementRef).nativeElement;

  constructor() { }

  ngOnInit() {
    this.renderer.setStyle(this.hostEl, 'color', 'red');
    this.renderer.setStyle(this.hostEl, 'border', '1px solid black');
    this.renderer.setStyle(this.hostEl, 'padding', '8px');
  }

}
