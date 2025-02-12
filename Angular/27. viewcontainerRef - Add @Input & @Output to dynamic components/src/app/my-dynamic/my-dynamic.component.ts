import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-dynamic',
  imports: [],
  templateUrl: './my-dynamic.component.html',
  styleUrl: './my-dynamic.component.css'
})
export class MyDynamicComponent {

  @Input() MyMessage: string = "My Default Text";
  @Output() myAction = new EventEmitter<string>();

  sendEvent() {
    this.myAction.emit("Here is some text from me.");
  }
}
