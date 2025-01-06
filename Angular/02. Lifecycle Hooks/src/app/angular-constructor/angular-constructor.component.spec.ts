import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularConstructorComponent } from './angular-constructor.component';

describe('AngularConstructorComponent', () => {
  let component: AngularConstructorComponent;
  let fixture: ComponentFixture<AngularConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularConstructorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
