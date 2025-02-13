import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-child-onpush',
  imports: [],
  templateUrl: './child-onpush.component.html',
  styleUrl: './child-onpush.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildOnpushComponent {
  count: number = 0;

  constructor() {
    setInterval(() => {
      this.count++;
    }, 1000);
  }
}
