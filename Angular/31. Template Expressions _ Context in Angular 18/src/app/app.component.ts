import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '31.Template Expressions & Context in Angular 18';
  
  onClick(e: any) {
    alert(e.target)
  }

  arr = [1,2,3,4,5,6]

  saveDetails(value: string) {
    alert(value);
  }



}
