import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child-onpush',
  imports: [CommonModule],
  templateUrl: './child-onpush.component.html',
  styleUrl: './child-onpush.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush, // Only runs the change Detection when something happened
})
export class ChildOnpushComponent {
  // 1st method
  // @Input() count = 0;

  // 2nd Method
  // count = 0;

  // increment() {
  //   this.count++;
  // }

  // 3rd Method
  // count$!: Observable<number>;

  // constructor() {

  //   this.count$ = new Observable((subcriber) => {

  //     let value = 0;
      
  //     setInterval(() => {
  //       subcriber.next(value++);
  //     }, 1000); 

  //   });

  // }



  // 4rd Method - Manually Trigger the Change Detection

  count = 0;

  constructor(private cdr: ChangeDetectorRef) {
    setInterval(() => {
      this.count++;
      cdr.markForCheck();
    }, 1000)
  }
}
