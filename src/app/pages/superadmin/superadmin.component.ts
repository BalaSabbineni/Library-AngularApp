import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiEndpoints } from '../../core/api-endpoints';
import { AuthService } from '../../services/auth.service';
import { UserRole } from '../../core/models';

interface AdminAccount {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

@Component({
  selector: 'app-superadmin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './superadmin.component.html',
  styleUrl: './superadmin.component.css'
})
export class SuperadminComponent implements OnInit {
  private readonly http = inject(HttpClient);
  readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  admins = signal<AdminAccount[]>([]);
  loading = signal(false);
  showCreateModal = signal(false);
  creating = signal(false);

  successMessage = signal('');
  errorMessage = signal('');
  formError = signal('');

  createForm = {
    name: '',
    email: '',
    password: '',
    role: 'ADMIN' as UserRole,
    autoGenPassword: false,
    sendWelcomeEmail: true
  };

  ngOnInit() {
    if (this.authService.user()?.role !== 'SUPERADMIN') {
      this.router.navigate(['/']);
      return;
    }
    this.loadAdmins();
  }

  loadAdmins() {
    this.loading.set(true);
    this.http.get<AdminAccount[]>(ApiEndpoints.superadminAdmins).subscribe({
      next: (data) => { this.admins.set(data); this.loading.set(false); },
      error: () => { this.loading.set(false); }
    });
  }

  openCreateModal() {
    this.createForm = { name: '', email: '', password: '', role: 'ADMIN', autoGenPassword: false, sendWelcomeEmail: true };
    this.formError.set('');
    this.showCreateModal.set(true);
  }

  toggleAutoGen() {
    if (this.createForm.autoGenPassword) {
      this.createForm.password = Math.random().toString(36).slice(-10) + 'A1!';
    } else {
      this.createForm.password = '';
    }
  }

  createAdmin() {
    const { name, email, password, role } = this.createForm;
    if (!name.trim() || !email.trim() || !password.trim()) {
      this.formError.set('Name, email and password are required.');
      return;
    }
    this.formError.set('');
    this.creating.set(true);

    this.http.post<AdminAccount>(ApiEndpoints.superadminAdmins, { name, email, password, role }).subscribe({
      next: (created) => {
        this.creating.set(false);
        this.showCreateModal.set(false);
        this.admins.update(list => [...list, created]);
        this.successMessage.set(`Admin account created for ${created.email}.`);
        setTimeout(() => this.successMessage.set(''), 3000);
      },
      error: (err) => {
        this.creating.set(false);
        this.formError.set(err?.error?.message || 'Failed to create admin.');
      }
    });
  }
}
