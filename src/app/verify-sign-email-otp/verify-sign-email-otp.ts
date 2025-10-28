import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-verify-sign-email-otp',
  imports: [FormsModule, CommonModule],
  templateUrl: './verify-sign-email-otp.html',
  styleUrl: './verify-sign-email-otp.css'
})
export class VerifySignEmailOTP {

  constructor(private router: Router) { }
  otpValidation = { otp: '' };
  otpError = '';
  otpValidationError = '';

  get validOtp(): boolean {
    const otpPattern = /^\d{6}$/; // Assuming OTP is a 6-digit number
    return otpPattern.test(this.otpValidation.otp);
  }

  onOtpValidation() {
    this.otpError = '';
    // Simple validation, replace with API call
    if (this.validOtp) {
      alert('OTP validated successfully. Your email has been verified. Please login to continue.');
      this.router.navigate(['/login']);
    } else {
      this.otpError = 'Please enter a valid 6-digit OTP.';
    }
  }
}
