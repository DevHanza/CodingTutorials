import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sizer2Component } from './sizer2.component';

describe('Sizer2Component', () => {
  let component: Sizer2Component;
  let fixture: ComponentFixture<Sizer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sizer2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sizer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
