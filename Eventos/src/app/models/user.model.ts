import { Role } from './role.model';

export interface User {
  id: number;
  nombre: string;
  email: string;
  password: string;
  rol: Role;
}

/** Datos necesarios para iniciar sesión. */
export type LoginCredentials = Pick<User, 'email' | 'password'>;

/** Datos necesarios para registrar un usuario (el id lo asigna el servicio). */
export type RegisterData = Omit<User, 'id'>;
