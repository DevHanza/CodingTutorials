import {
  Component,
  ElementRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { HoverComponent } from '../hover/hover.component';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-view-child',
  imports: [HoverComponent, HighlightDirective],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css',
})
export class ViewChildComponent {
  @ViewChild('myRef', { read: ElementRef }) myRef!: ElementRef;
  @ViewChild('hoverComponent', { read: HoverComponent })
  hoverComponent!: HoverComponent;

  @ViewChild('containerRef', { read: ViewContainerRef })
  containerRef!: ViewContainerRef;

  @ViewChild(HighlightDirective, { read: HighlightDirective })
  highlightDirective!: HighlightDirective;

  ngAfterViewInit() {
    console.log(this.myRef);
    console.log(this.hoverComponent);
    console.log(this.containerRef);
    console.log(this.highlightDirective);
  }
}
