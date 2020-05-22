import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUniComponent } from './add-uni.component';

describe('AddUniComponent', () => {
  let component: AddUniComponent;
  let fixture: ComponentFixture<AddUniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
