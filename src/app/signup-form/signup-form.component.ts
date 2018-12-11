import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {usernameValidators} from './username.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('',
      [Validators.required,
        Validators.minLength(3),
        usernameValidators.cannotContainSpace
      ]),

    password: new FormControl()
  });

  get username() {
    return this.form.get('username');
  }

  login() {
    console.log(this.username.errors);
    this.form.setErrors({
      invalidLogin : true
    });
    console.log(this.username.errors);
  }

}
