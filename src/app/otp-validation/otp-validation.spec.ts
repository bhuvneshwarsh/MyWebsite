import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpValidation } from './otp-validation';

describe('OtpValidation', () => {
  let component: OtpValidation;
  let fixture: ComponentFixture<OtpValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtpValidation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpValidation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
