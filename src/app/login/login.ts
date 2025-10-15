import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  login = { email: '', password: '' };
  loginError = '';

  onLogin() {
    this.loginError = '';
    // Simple validation, replace with API call
    if (this.login.email === 'user@example.com' && this.login.password === 'password') {
      alert('Login successful!');
    } else {
      this.loginError = 'Invalid email or password.';
    }
  }
}
