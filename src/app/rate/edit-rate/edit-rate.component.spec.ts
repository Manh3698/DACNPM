import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRateComponent } from './edit-rate.component';

describe('EditRateComponent', () => {
  let component: EditRateComponent;
  let fixture: ComponentFixture<EditRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
