import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LifecycleHooksComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Lifecycle Hooks';
  subtitle = 'ngOnchanges, ngOnDestroy and DestroyRef methods';

  x = "Hello, World."

  isVisible = true;

  changeInput() {
    this.x = "Title is Updated." + Math.random()
  }

  showToggle() {
   this.isVisible = !this.isVisible;
  }
}
