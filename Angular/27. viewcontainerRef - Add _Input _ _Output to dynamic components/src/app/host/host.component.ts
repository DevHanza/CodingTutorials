import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MyDynamicComponent } from '../my-dynamic/my-dynamic.component';

@Component({
  selector: 'app-host',
  // imports: [MyDynamicComponent],
  imports: [],
  templateUrl: './host.component.html',
  styleUrl: './host.component.css'
})
export class HostComponent {

  @ViewChild('hostDiv', {read: ViewContainerRef}) container!: ViewContainerRef; 

  componentRef!: ComponentRef<MyDynamicComponent>;

  constructor () {
  }

  loadComponent() {
    this.container.clear()
    // this.container.createComponent(MyDynamicComponent);

    this.componentRef = this.container.createComponent(MyDynamicComponent);

    this.componentRef.instance.MyMessage = "Hi Leela!";
    this.componentRef.instance.myAction.subscribe( (msg) => {
      console.log(msg);
    });
  }



}
