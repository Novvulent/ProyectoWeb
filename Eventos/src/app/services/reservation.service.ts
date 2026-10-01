import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewReservation, Reservation, ReservationStatus } from '@/models';
import { mockRequest } from '@/utils/mock-request';
import { reservationsMock } from './mock/reservations.mock';

@Injectable({ providedIn: 'root' })
export class ReservationService {
  private reservations: Reservation[] = [...reservationsMock];

  getAll(): Observable<Reservation[]> {
    return mockRequest(() => [...this.reservations]);
  }

  getByClient(clienteId: number): Observable<Reservation[]> {
    return mockRequest(() => this.reservations.filter((r) => r.clienteId === clienteId));
  }

  create(data: NewReservation): Observable<Reservation> {
    return mockRequest(() => {
      const nextId = Math.max(0, ...this.reservations.map((r) => r.id)) + 1;
      const reservation: Reservation = {
        id: nextId,
        ...data,
        estado: ReservationStatus.PENDIENTE,
        fechaReserva: new Date().toISOString().slice(0, 10),
      };
      this.reservations.push(reservation);
      return reservation;
    });
  }

  updateStatus(id: number, estado: ReservationStatus): Observable<Reservation> {
    return mockRequest(() => {
      const reservation = this.reservations.find((r) => r.id === id);
      if (!reservation) throw new Error('Reserva no encontrada');
      reservation.estado = estado;
      return { ...reservation };
    });
  }
}
