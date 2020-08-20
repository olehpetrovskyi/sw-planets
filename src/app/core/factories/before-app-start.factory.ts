import { AuthService } from '@swp/auth/services/auth.service';

export function beforeAppStartFactory(authService: AuthService) {
  return () => {
    authService.initialize();
  };
}
