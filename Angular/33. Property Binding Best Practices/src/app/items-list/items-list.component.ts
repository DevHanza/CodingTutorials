import { Component, Input } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-items-list',
  imports: [],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.css'
})
export class ItemsListComponent {
  @Input() item: string = '';

  @Input() obj: Item[] = [];

  ngOnInit() {
    console.log(this.obj)
  }

}
