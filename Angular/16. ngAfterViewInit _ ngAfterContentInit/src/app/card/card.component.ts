import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @ViewChild('hello') helloElement!: ElementRef;
  @ContentChild(CounterComponent) counterContent!: CounterComponent;


  ngAfterContentInit() {
    console.log("ngAfterContentInit");
    console.log("");
    console.log(this.counterContent)
  }
  
  ngAfterViewInit() {
    console.log('ngAfterViewInit.');
    console.log(this.helloElement.nativeElement);
    // console.log(this.counterContent)
  }

}
