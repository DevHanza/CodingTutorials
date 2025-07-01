import { Component, ElementRef, ViewChild } from '@angular/core';
import { AnotherComponentComponent } from '../another-component/another-component.component';

@Component({
  selector: 'app-view-child-example',
  imports: [AnotherComponentComponent],
  templateUrl: './view-child-example.component.html',
  styleUrl: './view-child-example.component.css'
})
export class ViewChildExampleComponent {

  @ViewChild('myElement', {static: true}) myEl!: ElementRef;
  @ViewChild('myComponent') myComp!: AnotherComponentComponent;
  
  ngOnInit() {
    // You can only access it here if it is static.
    console.log(this.myEl)
  }

  // Best place for @ViewChild
  ngAfterViewInit() {
    console.log(this.myEl.nativeElement.innerHTML);
    console.log(this.myComp);
    
  }
  
}
