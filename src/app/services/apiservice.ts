import { HttpClient,provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedbackData } from '../interface/IFeedback';
import { IUserMessage } from '../interface/IUsermessage';
import { ISignup } from '../interface/ISignup';
// apiservice.ts
// Do NOT import Feedback here

@Injectable({
  providedIn: 'root'
})
export class APIService {
  
  constructor(private http: HttpClient) { }

  saveFeedback(feedbackData: FeedbackData) {
    return this.http.post('https://localhost:5001/api/Feedback', feedbackData);
  }

  saveMessage(messageData: IUserMessage) {
    return this.http.post('https://localhost:5001/api/UserMessage', messageData);
  }

  submitSignup(signupData: ISignup) {
    return this.http.post('https://localhost:5001/api/userlist', signupData);
  }
  getLoginDetails(): Observable<ISignup[]> {
    return this.http.get<ISignup[]>('https://localhost:5001/api/userlist');
  }
}
