import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-panel',
  imports: [],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css',
  outputs: ['dataEvent: childEvent']
})
export class PanelComponent {

  // @Output() dataEvent = new EventEmitter<string>();
  @Output('childEvent') dataEvent = new EventEmitter<string>();
  
  sendData() {
    this.dataEvent.emit('data from child');
  }
}
