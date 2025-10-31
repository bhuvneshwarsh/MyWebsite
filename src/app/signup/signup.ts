import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { APIService } from '../services/apiservice';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule, RouterLink, NgIf],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  constructor(private apiservice: APIService, private router: Router) { }

  signup = { name: '', email: '', password: '', confirm: '' };
  signupError = '';
  // otpError = '';

  // whetherOtpSent = false;
  // otpValidation = { email: '', otp: '' };
  // otpValidationError = '';



  get validName(): boolean {
    return this.signup.name.trim().length > 6 && this.signup.name.trim().length < 30;
  }
  get validEmail(): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(this.signup.email);
  }
  get passwordMismatch(): boolean {
    return this.signup.password !== this.signup.confirm;
  }
  get passwordValidation(): boolean {
    return this.signup.password.length > 6 && /[A-Z]/.test(this.signup.password) && /[0-9]/.test(this.signup.password) && /[!@#$%^&*]/.test(this.signup.password) && this.signup.password.length < 20;
  }
  // get validOtp(): boolean {
  //   const otpPattern = /^\d{6}$/; // Assuming OTP is a 6-digit number
  //   return otpPattern.test(this.otpValidation.otp);
  // }

  onSignup() {
    this.signupError = '';
    if (this.passwordMismatch) {
      this.signupError = 'Passwords do not match.';
      return;
    }
    const hashedPassword:string = CryptoJS.SHA256(this.signup.password).toString();
    this.apiservice.submitSignup({
        name: this.signup.name,
        email: this.signup.email,
        password: hashedPassword
      }).subscribe(response => {
        console.log('Signup successful', response);
        alert(`Sign Up successful! Hello, ${this.signup.name}. Please login to continue!`);
        this.router.navigate(['/login']);
      }, error => {
        // Handle signup error
        this.signupError = 'Signup failed. Please try again.';
      }); 
    // alert('Please verify your email using the OTP sent to your provided email address.');
    // this.apiservice.sendOtp(this.signup.email).subscribe(response => {
    //   alert('OTP has been sent successfully to ' + this.signup.email);
    //   // this.router.navigate(['/verify-sign-email-otp'], { queryParams: { email: this.signup.email } });
    //   // Replace with actual registration API call
    //   this.whetherOtpSent = true;
    // }, error => {
    //   this.signupError = 'Failed to send OTP. Please try again.';
    // });

    // if (this.whetherOtpSent) {
    //   this.otpValidationError = '';
    //   if (!this.validOtp) {
    //     this.otpValidationError = 'Invalid OTP. Please try again.';
    //     return;
    //   }
      // Proceed with OTP verification
    //   this.apiservice.verifyOtp(this.otpValidation.email, this.otpValidation.otp).subscribe(response => {
    //     alert('OTP verified successfully.');
    //     // Navigate to the next step or show success message
    //   }, error => {
    //     this.otpValidationError = 'Failed to verify OTP. Please try again.';
    //   });
    // }
}}