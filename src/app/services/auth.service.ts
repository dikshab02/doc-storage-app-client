import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAdmin: boolean = true;

  constructor() {}

  login(userInfo: string) {
    localStorage.setItem('LOGIN_USER', userInfo);
  }

  isLoggedIn() {
    return localStorage.getItem('LOGIN_USER') != null;
  }

  logout() {
    localStorage.removeItem('LOGIN_USER');
  }

  isLoggedOut() {
    return localStorage.getItem('LOGIN_USER') == null;
  }

  isAdminCheck() {
    const LOGIN_USER = localStorage.getItem('LOGIN_USER');
    if (LOGIN_USER) {
      const loginUser = JSON.parse(LOGIN_USER);
      return loginUser.isAdmin === 'true';
    }
    return false;
  }
}
