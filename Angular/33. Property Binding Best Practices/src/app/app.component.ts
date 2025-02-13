import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemsListComponent } from "./items-list/items-list.component";
import { Item } from './items-list/item.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ItemsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '33. Property Binding Best Practices';

  isDisabled = true;

  classes = ['btn', 'btn-primary']

  myItem: string = "Hello World";

  ObjectList: Item[] = [{
    id: 1,
    name: "Hello"
  }]
}
