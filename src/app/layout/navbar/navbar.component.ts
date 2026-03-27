import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';

type AuthMode = 'login' | 'register';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  readonly authService = inject(AuthService);
  private readonly cartService = inject(CartService);
  private readonly router = inject(Router);

  showAuthModal = signal(false);
  authMode = signal<AuthMode>('login');
  loadingAuth = signal(false);
  authError = signal('');
  authSuccess = signal('');

  searchTerm = '';

  signInForm = {
    email: '',
    password: ''
  };

  registerForm = {
    name: '',
    email: '',
    password: ''
  };

  openAuthModal(mode: AuthMode = 'login') {
    this.authMode.set(mode);
    this.showAuthModal.set(true);
    this.authError.set('');
    this.authSuccess.set('');
  }

  closeAuthModal() {
    this.showAuthModal.set(false);
    this.authError.set('');
    this.authSuccess.set('');
  }

  setAuthMode(mode: AuthMode) {
    this.authMode.set(mode);
    this.authError.set('');
    this.authSuccess.set('');
  }

  signIn() {
    this.authError.set('');
    this.loadingAuth.set(true);

    this.authService.signIn(this.signInForm).subscribe({
      next: () => {
        this.loadingAuth.set(false);
        this.closeAuthModal();
        this.signInForm = { email: '', password: '' };
      },
      error: (err) => {
        this.loadingAuth.set(false);
        this.authError.set(err?.error?.message || err?.error?.error?.message || 'Sign in failed.');
      }
    });
  }

  register() {
    this.authError.set('');
    this.loadingAuth.set(true);

    this.authService.register(this.registerForm).subscribe({
      next: (res) => {
        this.loadingAuth.set(false);
        this.authSuccess.set(`Registered ${res.email}. Check your inbox to verify, then sign in.`);
        this.signInForm.email = this.registerForm.email;
        this.signInForm.password = this.registerForm.password;
        this.authMode.set('login');
        this.registerForm = { name: '', email: '', password: '' };
      },
      error: (err) => {
        this.loadingAuth.set(false);
        this.authError.set(err?.error?.message || err?.error?.error?.message || 'Registration failed.');
      }
    });
  }

  signOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  onSearch() {
    if (!this.searchTerm.trim()) return;
    this.router.navigate(['/books'], { queryParams: { q: this.searchTerm.trim() } });
  }

  get cartCount() {
    return this.cartService.itemCount();
  }

  get isAdmin() {
    const role = this.authService.user()?.role;
    return role === 'ADMIN' || role === 'SUPERADMIN';
  }

  get isSuperAdmin() {
    return this.authService.user()?.role === 'SUPERADMIN';
  }
}
