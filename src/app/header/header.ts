import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterLink, Router, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/authservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuOpen = false;
  loginsignupOpen = false;

  constructor(private router: Router, public authService: AuthService, private elementRef: ElementRef) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }
  getLoginValidated(){
    //logic to check if user is logged in or not
    if(this.authService.loginInfo.isloggedin){ //if logged in then return true
      return true;
    }
    //if not logged in then show alert and return false
    alert("To View gallery you must login first!");
    this.router.navigate(['/login']);   
    return false;
  }
  logout() {
    this.authService.loginInfo.isloggedin = false;
    alert("You have been logged out successfully.");
    this.router.navigate(['/login']);   
  }
  search() {
    alert("Search functionality is not implemented yet. Will be available in future updates.");
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.loginsignupOpen = false;
  }
  loginsignupMenu() {
    this.loginsignupOpen = !this.loginsignupOpen;
    this.menuOpen = false;
  }

  // Listen for clicks on the whole document
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    // Only act if menu is open
    if (this.menuOpen || this.loginsignupOpen) {
      const clickedInside = this.elementRef.nativeElement.contains(event.target);
      if (!clickedInside) {
        this.menuOpen = false;
        this.loginsignupOpen = false;
      }
    }
  }
}
