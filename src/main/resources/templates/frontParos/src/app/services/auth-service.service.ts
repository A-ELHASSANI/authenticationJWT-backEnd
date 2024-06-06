import { Injectable } from '@angular/core';
import { UserModule } from '../user/user.module';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private isLoggedIn = false;
  private user: UserModule = {
    username: 'test',
    email: 'test@gmail.com',
    firstName: 'test',
    lastName: 'test',
    password: undefined,
    phoneNumber: undefined
  };
  private storedPassword = 'test123456789';
  userData$: any;
  constructor() {
    // Initialize auth state from localStorage
    const savedAuthState = localStorage.getItem('isAuthenticated');
    this.isLoggedIn = savedAuthState === 'true';
    // this.user = localStorage.getItem('currentUser');
  }

  login(email: string, password: string): boolean {
    if (email === this.user.email && password === this.storedPassword) {
      this.isLoggedIn = true;
      localStorage.setItem('isAuthenticated', 'true'); // Save state to localStorage
      // localStorage.setItem('currentUser', email); // Save user email to localStorage
      return true;
    }

    return false;

  }


  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('isAuthenticated'); // Clear state from localStorage
    // localStorage.removeItem('currentUser'); // Clear user email from localStorage
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
  getUser(): UserModule {
    return this.user;
  }

  updateUser(user: UserModule) {
    this.user = user;
  }
}
