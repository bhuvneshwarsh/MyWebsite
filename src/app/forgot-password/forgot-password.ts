import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { APIService } from '../services/apiservice';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf, RouterModule],
  templateUrl: './forgot-password.html',
  styleUrls: ['./forgot-password.css']
})
export class ForgotPassword {

  constructor(private router: Router, private apiservice: APIService) {}

  forgotPassword = { email: '' };
  forgotPasswordError = '';


  get validEmail(): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(this.forgotPassword.email);
  }

  onForgotPassword() {
    this.forgotPasswordError = '';
    if (this.validEmail) {
      this.apiservice.sendOtp(this.forgotPassword.email).subscribe(response => {
        alert('OTP has been sent successfully to ' + this.forgotPassword.email);
        this.router.navigate(['/otp-validation'], { queryParams: { email: this.forgotPassword.email } });
        console.log('OTP sent response:', response);
      }, error => {
        // Handle error in sending OTP
        this.forgotPasswordError = 'Failed to send OTP. Please try again.';
      });
    } else {
      this.forgotPasswordError = 'Please enter a valid registered email address.';
    }
  }

}
