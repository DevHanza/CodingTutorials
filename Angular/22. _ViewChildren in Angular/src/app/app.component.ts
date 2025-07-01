import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '@ViewChildren in Angular';

  tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'];

  // @ViewChildren(TaskComponent) taskComponents!: QueryList<TaskComponent>;

  // ngAfterViewInit() {
  //   console.log(this.taskComponents)
  //   console.log(this.taskComponents.length);

  //   this.taskComponents.forEach(task => {
  //     console.log(task.taskName); // a variable inside of the taskCompoenent.
  //   })
  // }



  @ViewChildren(TaskComponent, { read: ElementRef })
  taskComponents!: QueryList<ElementRef>;

  ngAfterViewInit() {

    this.taskComponents.forEach(task => {
      console.log(task);
    })

  
    // Check for Child Changes
    this.taskComponents.changes.subscribe(() => {
      console.warn("A Child has been changed!");
    })
    
    // Add a Child to Componenets
      setTimeout(() => {
        this.tasks.push("Hello, I'm a new Task.")
      }, 3000);


  }

  
}
