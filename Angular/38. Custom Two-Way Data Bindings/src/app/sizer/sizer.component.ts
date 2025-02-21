import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sizer',
  imports: [],
  templateUrl: './sizer.component.html',
  styleUrl: './sizer.component.css'
})
export class SizerComponent {

  @Input() size = 0;
  @Output() onSizeChange = new EventEmitter<number>();
  // @Output() SizeChange = new EventEmitter<number>();


  increment() {
    this.resize(1);
  }
  
  decrement() {
    this.resize(-1);
  }

  resize(value: number) {
    const sizeValue = this.size + value;
    this.onSizeChange.emit(sizeValue);
    // this.SizeChange.emit(sizeValue);
  }

}
