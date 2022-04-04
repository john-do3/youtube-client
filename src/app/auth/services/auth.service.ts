import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    private userNameKey = 'userName';
    private tokenKey = 'authToken';

    loginUser(userName: string) {
        localStorage.setItem(this.userNameKey, userName);
        localStorage.setItem(this.tokenKey, 'faketoken');
    }


}