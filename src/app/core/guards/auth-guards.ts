import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../services/auth/authentication.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);

  return true;

  if (authService.IsAuthenticated()) {
    return true;
  }

  await authService.logout();
  return false;
};
