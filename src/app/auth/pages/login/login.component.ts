import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  username!: string;
  password!: string;
  loginValid: boolean = true;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    this.authService.loginUser(this.username);
    this.router.navigateByUrl('/youtube');
  }
}
