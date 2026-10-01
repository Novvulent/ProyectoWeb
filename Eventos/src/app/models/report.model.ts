import { ReservationStatus } from './reservation.model';

export interface EventReservationCount {
  eventoId: number;
  nombreEvento: string;
  totalReservas: number;
}

/** Información que consume la vista del Administrador (tablas y gráficas). */
export interface SystemReport {
  totalEventos: number;
  totalReservas: number;
  totalUsuarios: number;
  reservasPorEstado: Record<ReservationStatus, number>;
  reservasPorEvento: EventReservationCount[];
}
