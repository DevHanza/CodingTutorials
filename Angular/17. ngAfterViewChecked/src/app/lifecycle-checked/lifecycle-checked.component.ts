import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lifecycle-checked',
  imports: [CommonModule],
  templateUrl: './lifecycle-checked.component.html',
  styleUrl: './lifecycle-checked.component.css',
})
export class LifecycleCheckedComponent {
  @ViewChild('myInput') myInputEl!: ElementRef;
  @ViewChild('scrollContainer') scrollContainerEl!: ElementRef;

  items = ['Item 1', 'Item 2', 'Item 3'];

  addItem() {
    this.items.push(`Item ${this.items.length + 1}`);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit.');
  }

  // Runs every time the component's view has been checked for changes.
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked.')
    this.scrollToBottom();
  }

  scrollToBottom() {
    try {
      this.scrollContainerEl.nativeElement.scrollTop =
        this.scrollContainerEl.nativeElement.scrollHeight;
    } catch (err){}
  }
}
