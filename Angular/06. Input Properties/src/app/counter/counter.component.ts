import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  @Input({ required: true, transform: changeValue }) count: number = 0;
}

function changeValue(value: number) {
  return value * 10;
}
