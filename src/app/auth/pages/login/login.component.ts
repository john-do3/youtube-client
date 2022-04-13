import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { youtubeRoute } from 'src/app/project.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  username!: string;
  password!: string;

  loginValid: boolean = true;

  @ViewChild('loginForm')
  loginForm!: NgForm;
 
  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
    if (this.userService.checkIsLoggedIn()) this.router.navigateByUrl(youtubeRoute);
  }

  onSubmit(): void {
    this.userService.loginUser(this.username);
    this.router.navigateByUrl(youtubeRoute);
  }

  CheckPasswordInvalid(): void{
    let passwordInvalid = this.password.length < 3;
    
    if (passwordInvalid)
      this.loginForm.form.controls['password'].setErrors({'passwordstrength': true});
  }

}
