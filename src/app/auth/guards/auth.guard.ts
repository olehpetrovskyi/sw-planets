import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@swp/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate() {
    if (!this.authService.isSignedIn()) {
      this.router.navigate(['/sign-in']).then();
      return false;
    } else {
      return true;
    }
  }

}
