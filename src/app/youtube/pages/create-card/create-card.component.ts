import { Component } from '@angular/core';
import {
  AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators,
} from '@angular/forms';
import { urlRegex } from 'src/app/project.constants';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent {
  title!: string;

  description!: string;

  createCardForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    description: new FormControl('', [Validators.maxLength(255)]),
    imglink: new FormControl('', [Validators.required, Validators.pattern(urlRegex)]),
    videolink: new FormControl('', [Validators.required, Validators.pattern(urlRegex)]),
    datecreated: new FormControl('', [Validators.required, this.createDateValidator()]),
  });

  onSubmit(): void {
    // todo
  }

  createDateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const { value } = control;

      if (!value) {
        return null;
      }

      const today = new Date();
      const created = new Date(value);

      return created < today ? { datecreated: true } : null;
    };
  }
}
