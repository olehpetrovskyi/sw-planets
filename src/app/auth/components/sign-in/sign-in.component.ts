import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@swp/auth/services/auth.service';
import { Router } from '@angular/router';
import { SpinnerConfigInterface } from '@swp/layout';

@Component({
  selector: 'swp-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  inProgress: boolean;
  signInForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });
  submitSpinnerConfig: SpinnerConfigInterface = {
    diameter: 50,
    containerHeight: 59
  };

  constructor(private authService: AuthService,
              private router: Router) { }

  public get emailField() {
    return this.signInForm.get('email');
  }

  ngOnInit(): void {}

  submit() {
    if (!this.signInForm.valid) {
      this.signInForm.markAsTouched();
      return false;
    }
    this.inProgress = true;
    this.authService.signIn({ email: this.emailField.value })
      .subscribe(() => this.router.navigate(['/']));
  }

}
