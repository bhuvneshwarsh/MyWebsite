import { Injectable } from '@angular/core';
import { ILogin } from '../interface/ILogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginInfo: ILogin = { isloggedin: false };
}
