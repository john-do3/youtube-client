import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
    private userNameKey = 'userName';
    private tokenKey = 'authToken';

    checkIsLoggedIn(): boolean {
        let result = false;

        let token = localStorage.getItem('authToken');
        result = token ? true : false;

        return result;
    }

    getUserName(): string | null {
        return localStorage.getItem('userName');
    }

    loginUser(userName: string) {
        localStorage.setItem(this.userNameKey, userName);
        localStorage.setItem(this.tokenKey, 'faketoken');
    }

    logoutUser(): void {
        localStorage.setItem(this.userNameKey, '');
        localStorage.setItem(this.tokenKey, '');
    }

}