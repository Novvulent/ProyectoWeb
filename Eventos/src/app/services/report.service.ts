import { Injectable, inject } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReservationStatus, SystemReport } from '@/models';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { ReservationService } from './reservation.service';

@Injectable({ providedIn: 'root' })
export class ReportService {
  private readonly eventService = inject(EventService);
  private readonly reservationService = inject(ReservationService);
  private readonly authService = inject(AuthService);

  getSystemReport(): Observable<SystemReport> {
    return forkJoin({
      events: this.eventService.getAll(),
      reservations: this.reservationService.getAll(),
      users: this.authService.getAllUsers(),
    }).pipe(
      map(({ events, reservations, users }) => {
        const reservasPorEstado: Record<ReservationStatus, number> = {
          [ReservationStatus.PENDIENTE]: 0,
          [ReservationStatus.CONFIRMADA]: 0,
          [ReservationStatus.CANCELADA]: 0,
        };
        reservations.forEach((r) => reservasPorEstado[r.estado]++);

        return {
          totalEventos: events.length,
          totalReservas: reservations.length,
          totalUsuarios: users.length,
          reservasPorEstado,
          reservasPorEvento: events.map((e) => ({
            eventoId: e.id,
            nombreEvento: e.nombre,
            totalReservas: reservations.filter((r) => r.eventoId === e.id).length,
          })),
        };
      }),
    );
  }
}
