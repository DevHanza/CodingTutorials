import { Component, ContentChild, ElementRef, QueryList } from '@angular/core';
import { ChildComponent } from '../../child/child.component';

@Component({
  selector: 'app-parent',
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  // ================= ContentChild ================= 
  
  // @ContentChild(ChildComponent) child !: ChildComponent;
  
  // // Also accessible in the `ngAfterViewInit`.
  // ngAfterContentInit() {
    //   this.child.showMessage();
  // }

  //  -----------------------------------------------------
  
  // @ContentChild(ChildComponent, {read: ElementRef}) child !: ElementRef;
  
  // // Also accessible in the `ngAfterViewInit`.
  // ngAfterContentInit() {
    //   console.log(this.child.nativeElement);
  // }
  

  // ================= ContentChildren =================
  
  @ContentChild(ChildComponent, {read: ChildComponent}) children !: QueryList<ChildComponent>;

  ngAfterContentInit() {
    console.log(this.children);
  }
  
  //  -----------------------------------------------------

  // @ContentChild(ChildComponent, {read: ElementRef}) children !: ElementRef;

  // ngAfterContentInit() {
  //   console.log(this.children.nativeElement);
  // }
}
