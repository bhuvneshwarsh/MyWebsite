import { Component, NgModule } from '@angular/core';
import { APIService } from '../services/apiservice';
import { FormsModule, NgForm } from '@angular/forms';
import { IUserMessage } from '../interface/IUsermessage';
import { CommonModule, NgIf } from '@angular/common';


@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  constructor(private apiService: APIService) { }

  contact: IUserMessage = { name: '', email: '', usermessage1: '' };
  // usermessage: IUserMessage = { name: '', email: '', message: '' };
  submitted = false;

  onSubmit() {
    if (this.contact.name.trim() &&
        this.contact.email.trim() &&
        this.contact.usermessage1.trim()) 
      {
      // this.usermessage.name = form.value.name;
      // this.usermessage.email = form.value.email;
      // this.usermessage.message = form.value.message;

      this.apiService.saveMessage(this.contact).subscribe(response => {
        console.log('Message sent successfully', response);
      }, error => {
        console.error('Error sending message', error);
      });
      this.contact = { name: '', email: '', usermessage1: '' };
      this.submitted = true;
    }
  }
  get isNameValid(): boolean {
    return this.contact.name.trim().length >= 3;
  }
  get isEmailValid(): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(this.contact.email);
  }
  get isMessageValid(): boolean {
    return this.contact.usermessage1.trim().length >= 50;
  }


}