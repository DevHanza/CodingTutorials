import { afterNextRender, afterRender, AfterRenderPhase, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-after-render',
  imports: [],
  templateUrl: './after-render.component.html',
  styleUrl: './after-render.component.css'
})
export class AfterRenderComponent {

  @ViewChild('leela') leela!: ElementRef;

  constructor() {

    afterNextRender( () => {
      this.leela.nativeElement.style.color = 'red';
      console.log("AfterNext Render .")
    }, {phase: AfterRenderPhase.Write});

    afterRender( () => {
      console.log(this.leela.nativeElement.style.color);
      console.log("After Render.");

    }, {phase: AfterRenderPhase.Read})
  }

}
