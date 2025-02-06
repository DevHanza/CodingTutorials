import { Component } from '@angular/core';

@Component({
  selector: 'app-checked-lifecycle',
  imports: [],
  templateUrl: './checked-lifecycle.component.html',
  styleUrl: './checked-lifecycle.component.css'
})
export class CheckedLifecycleComponent {

  ngDoCheck() {
    console.log('ng DoCheck.')
  }

  ngAfterContentInit() {
    console.log("ngAfter ContentInit.")
  }

  // Runs everytime this component `content` has been checked for changes.
  ngAfterContentChecked() {
    console.log('ngAfter ContentChecked. ✅');
  }

  ngAfterViewInit() {
    console.log("ngAfter ViewInit.");
    
  }
  
  ngAfterViewChecked() {
    console.log('ngAfter ViewChecked. ✅');
  }

}
