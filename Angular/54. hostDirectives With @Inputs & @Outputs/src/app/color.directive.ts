import {
  Directive,
  inject,
  ElementRef,
  Renderer2,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  renderer = inject(Renderer2);
  hostEl = inject(ElementRef).nativeElement;

  @Input() color = 'red';
  @Output() colorChanged = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.renderer.setStyle(this.hostEl, 'color', this.color);
    this.renderer.setStyle(this.hostEl, 'border', '1px solid black');
    this.renderer.setStyle(this.hostEl, 'padding', '8px');



    setInterval(() => {

      this.colorChanged.emit();
      
    }, 1000);
  }
}
