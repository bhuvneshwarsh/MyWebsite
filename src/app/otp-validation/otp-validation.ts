import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../services/apiservice';

@Component({
  selector: 'app-otp-validation',
  imports: [FormsModule, NgIf, CommonModule],
  templateUrl: './otp-validation.html',
  styleUrl: './otp-validation.css'
})
export class OtpValidation {

  constructor(private route: ActivatedRoute, private router: Router, private apiservice: APIService) { }

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
      this.apiservice.verifyOtp(this.otpValidation.email, this.otpValidation.otp).subscribe(response => {
        // Handle successful OTP verification
        console.log('OTP verification response:', response.status, response);
          alert('OTP validated successfully.');
          this.router.navigate(['/updatepassword'], { queryParams: { email: this.otpValidation.email } });
        
      }, error => {
        console.error('Error verifying OTP:', error);
        this.otpValidationError = 'Failed to validate OTP. Please try again.';
      });
    } else {
      this.otpValidationError = 'Please enter a valid 6-digit OTP.';
    }
  }
}

  
