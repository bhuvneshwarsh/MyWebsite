import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { APIService } from '../services/apiservice';
import { ISignup } from '../interface/ISignup';
import { ILogin } from '../interface/ILogin';
import { AuthService } from '../services/authservice';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class Login {

  constructor(private apiservice: APIService, private authService: AuthService, private router: Router) {}

  login = { email: '', password: '' };
  loginError = '';

  onLogin() {
    this.loginError = '';
    // Simple validation, replace with API call
    this.apiservice.getLoginDetails().subscribe((response: ISignup[]) => {
      const user = response.find(u => u.email === this.login.email && u.password === this.login.password);
      if (user) {
        this.authService.loginInfo = { isloggedin: true, username: user.name , email: user.email, role: 'Personal login' };
        alert('Login successful! Hello ' + user.name + '.');
        // Redirect to home or dashboard
        this.router.navigate(['/home']);
      } else {
        this.loginError = 'Invalid email or password.';
      }
    });
  }
  get validEmail(): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(this.login.email);
  }
  
  get passwordValidation(): boolean {
    return this.login.password.length > 6 && /[A-Z]/.test(this.login.password) && /[0-9]/.test(this.login.password) && /[!@#$%^&*]/.test(this.login.password) && this.login.password.length < 20;
  }
}
