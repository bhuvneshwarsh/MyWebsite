import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { APIService } from '../services/apiservice';
import { ISignup } from '../interface/ISignup';
import { AuthService } from '../services/authservice';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})

export class Login {

  constructor(private apiservice: APIService, private authService: AuthService, private router: Router) {}

  login = { name: '', email: '', password: '' };
  loginProtect = { name: '', email: '', password: '' };
  loginError = '';

  onLogin() {
    this.loginError = '';
    
    this.loginProtect.password = CryptoJS.SHA256(this.login.password).toString();
    this.loginProtect.email= this.login.email;

    this.apiservice.getLoginDetails(this.loginProtect).subscribe((response: ISignup) => {
      if (response && response.email === this.login.email) {
        this.authService.loginInfo = { isloggedin: true, username: response.name , email: response.email, role: 'Personal login' };
        alert('Login successful! Hello ' + response.name + '.');
        // Redirect to home or dashboard
        this.router.navigate(['/home']);
      } else {
        this.loginError = 'Invalid email or password.';
      }
    },error =>{
      this.loginError = 'Invalid email or password.';
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
