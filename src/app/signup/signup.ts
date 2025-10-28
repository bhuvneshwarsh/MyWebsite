import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { APIService } from '../services/apiservice';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule, RouterLink, NgIf],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  constructor(private apiservice: APIService, private router: Router) {}

  signup = { name: '', email: '', password: '', confirm: '' };
  signupError = '';
  
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

  onSignup() {
    this.signupError = '';
    if (this.passwordMismatch) {
      this.signupError = 'Passwords do not match.';
      return;
    }
      this.router.navigate(['/verify-sign-email-otp']);
    // Replace with actual registration API call
    this.apiservice.submitSignup({
      name: this.signup.name,
      email: this.signup.email,
      password: this.signup.password
    }).subscribe(response => {
      // Handle successful signup
      console.log('Signup successful', response);
      alert(`Sign Up successful! Welcome, ${this.signup.name}.`);
    }, error => {
      // Handle signup error
      this.signupError = 'Signup failed. Please try again.';
    });
    
  }
}
