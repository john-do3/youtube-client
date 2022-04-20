import { Component, OnInit } from '@angular/core';
import {
  AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators,
} from '@angular/forms';
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

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, this.createPasswordStrengthValidator()]),
  });

  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit(): void {
    if (this.userService.checkIsLoggedIn()) this.router.navigateByUrl(youtubeRoute);
  }

  onSubmit(): void {
    this.userService.loginUser(this.username);
    this.router.navigateByUrl(youtubeRoute);
  }

  createPasswordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const { value } = control;

      if (!value) {
        return null;
      }

      const isEnoughtLength = value.length >= 8;

      const hasUpperCase = /[A-Z]+/.test(value);

      const hasLowerCase = /[a-z]+/.test(value);

      const hasNumeric = /[0-9]+/.test(value);

      const hasSpecial = /[*@!#%&()^~{}]+/.test(value);

      const passwordValid = isEnoughtLength && hasUpperCase && hasLowerCase && hasNumeric && hasSpecial;

      return !passwordValid ? { passwordStrength: true } : null;
    };
  }
}
