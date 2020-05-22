import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFacComponent } from './edit-fac.component';

describe('EditFacComponent', () => {
  let component: EditFacComponent;
  let fixture: ComponentFixture<EditFacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
