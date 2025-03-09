import { Directive, inject, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
})
export class BackgroundColorDirective {
  renderer = inject(Renderer2);
  hostEl = inject(ElementRef).nativeElement;

  constructor() {}

  ngOnInit() {
    this.renderer.setStyle(this.hostEl, 'backgroundColor', 'yellow');
  }
}
