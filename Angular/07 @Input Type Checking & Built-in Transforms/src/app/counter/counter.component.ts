import { booleanAttribute, Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input({ alias:"isShowing" }) isShowing: any;
  // @Input({ alias:"isShowing", transform: booleanAttribute }) isShowing: any;
  
  // @Input({alias: "mynumber"}) num: string = '';
  @Input({alias: "mynumber", transform: numberAttribute}) num: string = '';

  
}
