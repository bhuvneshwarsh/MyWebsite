import { Component } from '@angular/core';
import { AuthService } from '../services/authservice';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './userprofile.html',
  styleUrl: './userprofile.css'
})
export class Userprofile {
  constructor(public authService: AuthService, private router: Router) { }

  getUserInfo() {
    return this.authService.loginInfo;
  }
  logout() {
    this.authService.loginInfo.isloggedin = false;
    alert("You have been logged out successfully.");
    this.router.navigate(['/login']);
  }
}
