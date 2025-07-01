import { Component, DestroyRef, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  imports: [],
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.css'
})
export class LifecycleHooksComponent {

  @Input() x = '';

  // Runs when Angular instantiates the component.

  // DestryRef : Alternative to 'ngOnDestroy'. Watch the video for more. https://youtu.be/Haiuw2q5TrE

  constructor(private destoryRef: DestroyRef) {
    console.log("Constrcutor.");

    destoryRef.onDestroy(() => {
      console.log("DestroyRef Executed in the Constructor!");
    })
  }

  // Runs once after Angular has initialized all the component's inputs.
  ngOnInit() {
    console.log("ngOnInit.");
  }

  // Runs everytime the component's inputs have changed.
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges.");
    console.log(changes);
  }

  // 	Runs once before the component is destroyed.
  ngOnDestroy() {
    console.log("ngOnDestroy.");
  }

}
