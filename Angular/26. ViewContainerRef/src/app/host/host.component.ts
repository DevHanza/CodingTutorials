import { Component, ViewContainerRef } from '@angular/core';
import { MyDynamicComponent } from '../my-dynamic/my-dynamic.component';

@Component({
  selector: 'app-host',
  // imports: [MyDynamicComponent],
  imports: [],
  templateUrl: './host.component.html',
  styleUrl: './host.component.css'
})
export class HostComponent {

  constructor (private ViewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
    this.ViewContainerRef.createComponent(MyDynamicComponent);
  }

}
