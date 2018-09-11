import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { lowerCaseValidator } from '../../shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { usernamePassword } from './username-password.validator';
import { SignupService } from './signup.service';
import { PlatformDetectorService } from './../../core/platform-detector/platform-detector.service';
import { NewUser } from './new-user';

@Component({
  selector: 'ap-signup',
  templateUrl: './signup.component.html',
  providers: [ UserNotTakenValidatorService ]
})
export class SignupComponent implements OnInit {
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signupService: SignupService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(40)]
      ],
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          lowerCaseValidator
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(8), Validators.maxLength(14)]
      ]
    }, { validator: usernamePassword });

    if (this.platformDetectorService.isPlatformBrowser()) {
      this.emailInput.nativeElement.focus();
    }
  }

  signup() {
    if (this.signupForm.invalid || this.signupForm.pending) {
      return;
    }

    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signupService
      .signup(newUser)
      .subscribe(() => this.router.navigate(['']), err => console.log(err));
  }
}
