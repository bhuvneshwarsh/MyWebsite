import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface FeedbackData {
  name: string;
  email: string;
  comments: string;
}

@Component({
  selector: 'app-feedback',
  imports: [FormsModule, CommonModule],
  templateUrl: './feedback.html',
  styleUrl: './feedback.css'
})

export class Feedback {
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
      console.log('Feedback submitted:', this.feedback);

      this.submitted = true;
      // Reset form
      this.feedback = { name: '', email: '', comments: '' };
    }
  }
}
