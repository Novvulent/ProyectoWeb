import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Event, NewEvent } from '@/models';
import { EventService } from '@/services';

@Injectable({ providedIn: 'root' })
export class EventController {
  private readonly service = inject(EventService);

  /** Cliente y Agente: listado de eventos. */
  getEvents(): Observable<Event[]> {
    return this.service.getAll();
  }

  getEventById(id: number): Observable<Event | undefined> {
    return this.service.getById(id);
  }

  /** Agente: eventos registrados por él. */
  getEventsByAgent(agenteId: number): Observable<Event[]> {
    return this.service.getByAgent(agenteId);
  }

  /** Agente: registrar un evento. */
  registerEvent(data: NewEvent): Observable<Event> {
    return this.service.create(data);
  }
}
