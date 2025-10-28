import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifySignEmailOTP } from './verify-sign-email-otp';

describe('VerifySignEmailOTP', () => {
  let component: VerifySignEmailOTP;
  let fixture: ComponentFixture<VerifySignEmailOTP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifySignEmailOTP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifySignEmailOTP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
