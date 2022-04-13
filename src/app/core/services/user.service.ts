import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userNameKey = 'userName';

  private tokenKey = 'authToken';

  IsLoggedIn: Subject<boolean> = new Subject<boolean>();

  constructor() {
    const token = localStorage.getItem(this.tokenKey);
    this.IsLoggedIn.next(!!token);
  }

  checkIsLoggedIn(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return !!token;
  }

  getUserName(): string {
    const result = localStorage.getItem(this.userNameKey);
    return result || '';
  }

  loginUser(userName: string): void {
    localStorage.setItem(this.userNameKey, userName);
    localStorage.setItem(this.tokenKey, 'faketoken');
    this.IsLoggedIn.next(true);
  }

  logoutUser(): void {
    localStorage.removeItem(this.userNameKey);
    localStorage.removeItem(this.tokenKey);
    this.IsLoggedIn.next(false);
  }
}
