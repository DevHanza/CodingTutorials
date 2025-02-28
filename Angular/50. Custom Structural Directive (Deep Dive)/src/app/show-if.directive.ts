import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowIf]',
})
export class ShowIfDirective {
  // @Input() appShowIf!: boolean;

  // constructor(
  //   private templateRef: TemplateRef<any>,
  //   private viewContainer: ViewContainerRef
  // ) {}

  // ngOnChanges() {
  //   if (!this.appShowIf) {
  //     this.viewContainer.createEmbeddedView(this.templateRef);
  //   } else {
  //     this.viewContainer.clear();
  //   }
  // }

  //////////////////////////////////////////////////////

  @Input() set appShowIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
