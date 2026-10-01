import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginCredentials, RegisterData, User } from '@/models';
import { AuthService } from '@/services';

@Injectable({ providedIn: 'root' })
export class AuthController {
  private readonly service = inject(AuthService);

  login(credentials: LoginCredentials): Observable<User> {
    return this.service.login(credentials);
  }

  register(data: RegisterData): Observable<User> {
    return this.service.register(data);
  }

  logout(): void {
    this.service.logout();
  }

  getCurrentUser(): User | null {
    return this.service.getCurrentUser();
  }
}
