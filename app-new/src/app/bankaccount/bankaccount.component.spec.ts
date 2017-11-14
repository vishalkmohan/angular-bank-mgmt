import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankaccountComponent } from './bankaccount.component';

describe('BankaccountComponent', () => {
  let component: BankaccountComponent;
  let fixture: ComponentFixture<BankaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
