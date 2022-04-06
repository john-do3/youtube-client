import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  username!: string;

  password!: string;

  loginValid: boolean = true;

  constructor(private userService: UserService, private router: Router) {
    if (this.userService.checkIsLoggedIn()) this.router.navigateByUrl('youtube');
  }

  onSubmit(): void {
    this.userService.loginUser(this.username);
    this.router.navigateByUrl('youtube');
  }
}
