import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIService } from '../services/apiservice';
import { ActivatedRoute, Router } from '@angular/router';
import * as CryptoJS from 'crypto-js'


@Component({
  selector: 'app-updatepassword',
  imports: [FormsModule,CommonModule],
  templateUrl: './updatepassword.html',
  styleUrl: './updatepassword.css'
})
export class Updatepassword {

constructor(private route: ActivatedRoute, private router: Router, private apiservice: APIService) {}


  updatePassword = { password: '', confirm: '', email: '' };
  passwordMismatch = false;
  params = {name: '', email: '', password: ''};

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.updatePassword.email = params['email'];
      // You can use the email if needed
    });
  }

  onUpdatePassword() {
    this.passwordMismatch = this.updatePassword.password !== this.updatePassword.confirm;
    if (!this.passwordMismatch) {
      this.params.password = CryptoJS.SHA256(this.updatePassword.password).toString();
      this.params.email = this.updatePassword.email;
      this.apiservice.updatePassword(this.params).subscribe(response => {
        // Handle successful password update
        alert('Password updated successfully.');
        this.router.navigate(['/login']);
      }, error => {
        // Handle error in updating password
        alert('Failed to update password. Please try again.');
      });
    }
  } 

  get passwordValidation(): boolean {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/;
    return passwordPattern.test(this.updatePassword.password);
  }

}
