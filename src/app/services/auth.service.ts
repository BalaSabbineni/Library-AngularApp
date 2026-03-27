import { Injectable, computed, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { ApiEndpoints } from '../core/api-endpoints';
import { ApiResponse, AuthUser, LoginData, RegisterData, RegisterRequest, SignInRequest } from '../core/models';

const TOKEN_KEY = 'elibrary_token';
const USER_KEY  = 'elibrary_user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly tokenState = signal<string | null>(this.loadToken());
  private readonly userState  = signal<AuthUser | null>(this.loadUser());

  readonly token      = computed(() => this.tokenState());
  readonly user       = computed(() => this.userState());
  readonly isLoggedIn = computed(() => !!this.tokenState());

  constructor(private readonly http: HttpClient) {}

  signIn(payload: SignInRequest) {
    return this.http.post<ApiResponse<LoginData> | LoginData>(ApiEndpoints.authLogin, payload).pipe(
      map((response) => ('data' in response ? response.data : response)),
      tap((data) => {
        this.tokenState.set(data.accessToken);
        this.userState.set(data.user);
        localStorage.setItem(TOKEN_KEY, data.accessToken);
        localStorage.setItem(USER_KEY, JSON.stringify(data.user));
      })
    );
  }

  register(payload: RegisterRequest) {
    return this.http.post<ApiResponse<RegisterData> | RegisterData>(ApiEndpoints.authRegister, payload).pipe(
      map((response) => ('data' in response ? response.data : response))
    );
  }

  logout() {
    this.tokenState.set(null);
    this.userState.set(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }

  private loadToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  private loadUser(): AuthUser | null {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
}
