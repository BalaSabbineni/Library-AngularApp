import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.token();

  const headers: Record<string, string> = {
    'ngrok-skip-browser-warning': 'true'
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
    headers['X-User-Role'] = authService.user()?.role || '';
  }

  return next(req.clone({ setHeaders: headers }));
};
