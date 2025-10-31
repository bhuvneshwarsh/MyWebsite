import { HttpClient,provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedbackData } from '../interface/IFeedback';
import { IUserMessage } from '../interface/IUsermessage';
import { ISignup } from '../interface/ISignup';
import { ConfigService } from './config-service';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient, private configService: ConfigService) { }


  saveFeedback(feedbackData: FeedbackData) {
    return this.http.post(this.configService.apiUrl + 'api/Feedback', feedbackData);
  }

  saveMessage(messageData: IUserMessage) {
    return this.http.post(this.configService.apiUrl + 'api/UserMessage', messageData);
  }

  submitSignup(signupData: ISignup) {
    return this.http.post(this.configService.apiUrl + 'api/userlist/SaveUser', signupData);
  }
  getLoginDetails(loginData: {name:string; email: string; password: string }): Observable<any> {
    return this.http.post(this.configService.apiUrl + 'api/userlist/GetUser', loginData);
  }
  sendOtp(email: string): Observable<any> {
    return this.http.post(this.configService.apiUrl + 'api/OTPValidation/generate', { email, otp: '000000' });
  }
  verifyOtp(email: string, otp: string): Observable<any> {
    return this.http.post(this.configService.apiUrl + 'api/OTPValidation/validate', { email, otp });
  }
  updatePassword(passwordData: { name: string; email: string; password: string; }): Observable<any> {
    return this.http.put(this.configService.apiUrl + 'api/userlist/ResetPassword', passwordData);
  }

}
