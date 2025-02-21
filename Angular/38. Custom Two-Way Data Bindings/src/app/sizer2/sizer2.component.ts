import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sizer2',
  imports: [],
  templateUrl: './sizer2.component.html',
  styleUrl: './sizer2.component.css'
})
export class Sizer2Component {

    @Input() size2 = 0;
    @Output() size2Change = new EventEmitter<number>();
  
    increment() {
      this.resize(1);
    }
    
    decrement() {
      this.resize(-1);
    }
  
    resize(value: number) {
      const sizeValue = this.size2 + value;
      this.size2Change.emit(sizeValue);
    }
  
}
