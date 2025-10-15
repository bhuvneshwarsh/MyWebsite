import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  signup = { name: '', email: '', password: '', confirm: '' };
  signupError = '';
  
  get passwordMismatch(): boolean {
    return this.signup.password !== this.signup.confirm;
  }

  onSignup() {
    this.signupError = '';
    if (this.passwordMismatch) {
      this.signupError = 'Passwords do not match.';
      return;
    }
    // Replace with actual registration API call
    alert(`Sign Up successful! Welcome, ${this.signup.name}.`);
  }
}
