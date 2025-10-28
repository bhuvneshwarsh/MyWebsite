import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FeedbackData } from '../interface/IFeedback';
import { APIService } from '../services/apiservice';


@Component({
  selector: 'app-feedback',
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback.html',
  styleUrl: './feedback.css'
})

export class Feedback {

  constructor(private apiService: APIService) {}
  
  feedback: FeedbackData = {
    name: '',
    email: '',
    comments: '',
  };

  submitted = false;

  onSubmit() {
    if (
      this.feedback.name.trim() &&
      this.feedback.email.trim() &&
      this.feedback.comments.trim()
    ) {
      // Here you can add logic to send feedback to backend or API
      this.apiService.saveFeedback(this.feedback).subscribe(response => {
        console.log('Feedback submitted successfully', response);
      }, error => {
        console.error('Error submitting feedback', error);
      });

      this.submitted = true;
      // Reset form
      this.feedback = { name: '', email: '', comments: '' };
    }
  }

  get isNameValid(): boolean {
    return this.feedback.name.trim().length >= 3;
  }
  get isEmailValid(): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(this.feedback.email);
  }
  get isCommentsValid(): boolean {
    return this.feedback.comments.trim().length >= 50;
  }


}
