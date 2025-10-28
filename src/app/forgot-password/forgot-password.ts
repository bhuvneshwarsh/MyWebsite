import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf, RouterModule],
  templateUrl: './forgot-password.html',
  styleUrls: ['./forgot-password.css']
})
export class ForgotPassword {

  constructor(private router: Router) {}

  forgotPassword = { email: '' };
  forgotPasswordError = '';


  get validEmail(): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(this.forgotPassword.email);
  }

  onForgotPassword() {
    this.forgotPasswordError = '';
    // Simple validation, replace with API call
    if (this.validEmail) {
      alert('OTP has been sent to your registered email address.');
      this.router.navigate(['/otp-validation'], { queryParams: { email: this.forgotPassword.email } });
    } else {
      this.forgotPasswordError = 'Please enter a valid registered email address.';
    }
  }

}
