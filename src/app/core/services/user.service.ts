import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private userNameKey = 'userName';

  private tokenKey = 'authToken';

  checkIsLoggedIn(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    return !!token;
  }

  getUserName(): string | null {
    return localStorage.getItem(this.userNameKey);
  }

  loginUser(userName: string) {
    localStorage.setItem(this.userNameKey, userName);
    localStorage.setItem(this.tokenKey, 'faketoken');
  }

  logoutUser(): void {
    localStorage.removeItem(this.userNameKey);
    localStorage.removeItem(this.tokenKey);
  }
}
