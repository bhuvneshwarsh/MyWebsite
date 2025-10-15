import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }
  getLoginValidated(){
    //logic to check if user is logged in or not
    if(true){ //if logged in then return true

    //if not logged in then show alert and return false
    alert("To View gallery you must login first!");
    //return false;
    }
  }

}
