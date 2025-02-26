import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicList]',
})
export class DynamicListDirective {
  @Input() appDynamicList!: any[];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    this.viewContainer.clear();

    for (const item of this.appDynamicList) {
      const context = { $item: item };
      this.viewContainer.createEmbeddedView(this.templateRef, context);
    }
  }
}
