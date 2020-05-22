import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFacComponent } from './list-fac.component';

describe('ListFacComponent', () => {
  let component: ListFacComponent;
  let fixture: ComponentFixture<ListFacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
