import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRateComponent } from './add-rate.component';

describe('AddRateComponent', () => {
  let component: AddRateComponent;
  let fixture: ComponentFixture<AddRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
