import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
  <img [src]="imageURL">
  
  <div>
    <input type='text' [value]='text'>
  </div>
  `,
  styles: '',
  
})
export class HomeComponent {
  imageURL = 'https://picsum.photos/200/300';
  text = "Hello World"



}
