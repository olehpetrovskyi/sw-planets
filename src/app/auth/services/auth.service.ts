import { Injectable } from '@angular/core';
import { User } from '@swp/auth/data-models/User';
import { TextValidator } from '@swp/blocks/helpers/TextValidator';
import { Observable, Subscriber } from 'rxjs';
import { Router } from '@angular/router';

export interface IUserCredentials {
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User;

  constructor(private router: Router) { }

  initialize() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      this.currentUser = new User(user);
    }
  }

  signIn(options: IUserCredentials): Observable<User> {
    return new Observable((observer: Subscriber<User>): void => {
      setTimeout(() => {
        if (!this.areUserCredentialsValid(options)) { observer.error('credentials_invalid'); }
        this.currentUser = new User(options);
        this.saveUserToLocalStorage();
        observer.next(this.currentUser);
        observer.complete();
      }, 2000); // dummy async simulation
    });
  }

  logOut() {
    this.currentUser = null;
    this.removeUserFromLocalStorage();
    this.navigateToSignInState();
  }

  isSignedIn(): boolean {
    return !!this.currentUser;
  }

  private navigateToSignInState() {
    this.router.navigate(['/sign-in']);
  }

  private saveUserToLocalStorage() {
    localStorage.setItem('user', JSON.stringify(this.currentUser.toJson()));
  }

  private removeUserFromLocalStorage() {
    localStorage.removeItem('user');
  }

  private areUserCredentialsValid(options: IUserCredentials) {
    return options && options.email && TextValidator.isEmailValid(options.email);
  }
}
