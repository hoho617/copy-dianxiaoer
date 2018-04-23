import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNoticeComponent } from './order-notice.component';

describe('OrderNoticeComponent', () => {
  let component: OrderNoticeComponent;
  let fixture: ComponentFixture<OrderNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
