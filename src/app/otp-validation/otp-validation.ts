import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-otp-validation',
  imports: [FormsModule, NgIf, CommonModule],
  templateUrl: './otp-validation.html',
  styleUrl: './otp-validation.css'
})
export class OtpValidation {

constructor(private route: ActivatedRoute, private router: Router) {}

  otpValidation = { otp: '', email: '' };
  otpError = '';
  otpValidationError = '';

  get validOtp(): boolean {
    const otpPattern = /^\d{6}$/; // Assuming OTP is a 6-digit number
    return otpPattern.test(this.otpValidation.otp);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.otpValidation.email = params['email'];
    });
  }

  onOtpValidation() {
    this.otpError = '';
    // Simple validation, replace with API call

    if (this.validOtp) {
      alert('OTP validated successfully.');
      // Proceed with email verification  
      getUserDetailsWithEmail()
      this.router.navigate(['/login']);
    } else {
      this.otpError = 'Please enter a valid 6-digit OTP.';
    }
  }
}
