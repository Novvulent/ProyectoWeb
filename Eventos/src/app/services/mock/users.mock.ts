import { Role, User } from '@/models';

export const usersMock: User[] = [
  { id: 1, nombre: 'Administrador General', email: 'admin@eventos.com', password: 'admin123', rol: Role.ADMINISTRADOR },
  { id: 2, nombre: 'Laura Agente', email: 'agente@eventos.com', password: 'agente123', rol: Role.AGENTE },
  { id: 3, nombre: 'Carlos Cliente', email: 'cliente@eventos.com', password: 'cliente123', rol: Role.CLIENTE },
  { id: 4, nombre: 'Marta Cliente', email: 'marta@eventos.com', password: 'marta123', rol: Role.CLIENTE },
];
