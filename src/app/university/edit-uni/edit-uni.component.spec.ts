import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUniComponent } from './edit-uni.component';

describe('EditUniComponent', () => {
  let component: EditUniComponent;
  let fixture: ComponentFixture<EditUniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
