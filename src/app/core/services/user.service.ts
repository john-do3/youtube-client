import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private userNameKey = 'userName';

  private tokenKey = 'authToken';

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
  }

  logoutUser(): void {
    localStorage.removeItem(this.userNameKey);
    localStorage.removeItem(this.tokenKey);
  }
}
