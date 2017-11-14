import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymemtsuccessComponent } from './paymemtsuccess.component';

describe('PaymemtsuccessComponent', () => {
  let component: PaymemtsuccessComponent;
  let fixture: ComponentFixture<PaymemtsuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymemtsuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymemtsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
