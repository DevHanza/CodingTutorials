import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  // constructor(private el: ElementRef) {
  //   this.el.nativeElement.style.backgroundColor = 'yellow';
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('');
  // }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('red');
  // }

  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }

  // // // // // // // // // // // // // // // // // //

  constructor(private el: ElementRef) {}
  @Input() appHighlight = '';
  @Input() defaultInput = '';

  ngOnInit() {
    this.highlight(this.defaultInput || '');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.defaultInput);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
