import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEnrollmentComponent } from './all-enrollment.component';

describe('AllEnrollmentComponent', () => {
  let component: AllEnrollmentComponent;
  let fixture: ComponentFixture<AllEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEnrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
