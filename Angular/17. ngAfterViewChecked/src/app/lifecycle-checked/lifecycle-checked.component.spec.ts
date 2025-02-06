import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleCheckedComponent } from './lifecycle-checked.component';

describe('LifecycleCheckedComponent', () => {
  let component: LifecycleCheckedComponent;
  let fixture: ComponentFixture<LifecycleCheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleCheckedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
