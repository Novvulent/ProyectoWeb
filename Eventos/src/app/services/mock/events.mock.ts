import { Event } from '@/models';

export const eventsMock: Event[] = [
  { id: 1, nombre: 'Concierto de Salsa', descripcion: 'Noche de salsa en vivo con orquestas locales.', fecha: '2026-11-14', lugar: 'Cali', precio: 60000, cupos: 200, agenteId: 2 },
  { id: 2, nombre: 'Feria Tecnológica', descripcion: 'Charlas y stands de tecnología e innovación.', fecha: '2026-12-02', lugar: 'Tuluá', precio: 25000, cupos: 150, agenteId: 2 },
  { id: 3, nombre: 'Festival Gastronómico', descripcion: 'Muestra de comida típica del Valle del Cauca.', fecha: '2026-12-20', lugar: 'Buga', precio: 40000, cupos: 100, agenteId: 2 },
];
