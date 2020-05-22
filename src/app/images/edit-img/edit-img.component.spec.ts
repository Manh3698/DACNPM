import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImgComponent } from './edit-img.component';

describe('EditImgComponent', () => {
  let component: EditImgComponent;
  let fixture: ComponentFixture<EditImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
