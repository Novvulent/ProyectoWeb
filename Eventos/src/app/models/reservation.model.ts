export enum ReservationStatus {
  PENDIENTE = 'PENDIENTE',
  CONFIRMADA = 'CONFIRMADA',
  CANCELADA = 'CANCELADA',
}

export interface Reservation {
  id: number;
  eventoId: number;
  clienteId: number;
  cantidad: number;
  estado: ReservationStatus;
  /** Fecha de creación en formato ISO. */
  fechaReserva: string;
}

/** Datos para crear una reserva (id, estado y fecha los asigna el servicio). */
export type NewReservation = Pick<Reservation, 'eventoId' | 'clienteId' | 'cantidad'>;
