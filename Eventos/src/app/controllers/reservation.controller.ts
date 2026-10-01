import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { NewReservation, Reservation, ReservationStatus } from '@/models';
import { ReservationService } from '@/services';

@Injectable({ providedIn: 'root' })
export class ReservationController {
  private readonly service = inject(ReservationService);

  /** Agente: todas las reservas solicitadas. */
  getAllReservations(): Observable<Reservation[]> {
    return this.service.getAll();
  }

  /** Cliente: sus reservas con el estado actual. */
  getMyReservations(clienteId: number): Observable<Reservation[]> {
    return this.service.getByClient(clienteId);
  }

  /** Cliente: reservar un evento. */
  reserve(data: NewReservation): Observable<Reservation> {
    return this.service.create(data);
  }

  /** Agente: actualizar el estado de una reserva. */
  changeStatus(id: number, estado: ReservationStatus): Observable<Reservation> {
    return this.service.updateStatus(id, estado);
  }
}
