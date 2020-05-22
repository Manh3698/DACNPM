import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRateComponent } from './list-rate.component';

describe('ListRateComponent', () => {
  let component: ListRateComponent;
  let fixture: ComponentFixture<ListRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
