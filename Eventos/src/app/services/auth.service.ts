import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginCredentials, RegisterData, User } from '@/models';
import { mockRequest } from '@/utils/mock-request';
import { usersMock } from './mock/users.mock';

const SESSION_KEY = 'session_user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private users: User[] = [...usersMock];

  login({ email, password }: LoginCredentials): Observable<User> {
    return mockRequest(() => {
      const user = this.users.find((u) => u.email === email && u.password === password);
      if (!user) throw new Error('Credenciales incorrectas');
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
      return user;
    });
  }

  register(data: RegisterData): Observable<User> {
    return mockRequest(() => {
      if (this.users.some((u) => u.email === data.email)) {
        throw new Error('El correo ya está registrado');
      }
      const nextId = Math.max(0, ...this.users.map((u) => u.id)) + 1;
      const user: User = { id: nextId, ...data };
      this.users.push(user);
      return user;
    });
  }

  logout(): void {
    sessionStorage.removeItem(SESSION_KEY);
  }

  getCurrentUser(): User | null {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as User) : null;
  }

  getAllUsers(): Observable<User[]> {
    return mockRequest(() => [...this.users]);
  }
}
