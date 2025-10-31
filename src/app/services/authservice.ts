import { Injectable } from '@angular/core';
import { ILogin } from '../interface/ILogin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  loginInfo: ILogin = { isloggedin: false };

}
