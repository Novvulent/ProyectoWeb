import { Reservation, ReservationStatus } from '@/models';

export const reservationsMock: Reservation[] = [
  { id: 1, eventoId: 1, clienteId: 3, cantidad: 2, estado: ReservationStatus.CONFIRMADA, fechaReserva: '2026-10-01' },
  { id: 2, eventoId: 2, clienteId: 3, cantidad: 1, estado: ReservationStatus.PENDIENTE, fechaReserva: '2026-10-05' },
  { id: 3, eventoId: 1, clienteId: 4, cantidad: 4, estado: ReservationStatus.PENDIENTE, fechaReserva: '2026-10-07' },
  { id: 4, eventoId: 3, clienteId: 4, cantidad: 3, estado: ReservationStatus.CANCELADA, fechaReserva: '2026-10-09' },
];
