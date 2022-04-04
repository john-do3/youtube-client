import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
    private userNameKey = 'userName';
    private tokenKey = 'authToken';

    checkIsLoggedIn(): boolean {
        
        let token = localStorage.getItem(this.tokenKey);
        return token ? true : false;
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