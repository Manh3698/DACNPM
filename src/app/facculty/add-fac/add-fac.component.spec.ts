import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFacComponent } from './add-fac.component';

describe('AddFacComponent', () => {
  let component: AddFacComponent;
  let fixture: ComponentFixture<AddFacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
