import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html',
})
export class RegisterComponent {
  form;
  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.form = fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: matchingFields('password', 'confirmPassword'),
      }
    );
  }

  onSubmit() {
    console.log(this.form.errors);
    this.auth.register(this.form.value);
  }
}

function matchingFields(field1: any, field2: any) {
  return (form: any) => {
    if (form.controls[field1].value !== form.controls[field2].value)
      return { mismatchedFields: true };
  };
}
