import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event, NewEvent } from '@/models';
import { mockRequest } from '@/utils/mock-request';
import { eventsMock } from './mock/events.mock';

@Injectable({ providedIn: 'root' })
export class EventService {
  private events: Event[] = [...eventsMock];

  getAll(): Observable<Event[]> {
    return mockRequest(() => [...this.events]);
  }

  getById(id: number): Observable<Event | undefined> {
    return mockRequest(() => this.events.find((e) => e.id === id));
  }

  getByAgent(agenteId: number): Observable<Event[]> {
    return mockRequest(() => this.events.filter((e) => e.agenteId === agenteId));
  }

  create(data: NewEvent): Observable<Event> {
    return mockRequest(() => {
      const nextId = Math.max(0, ...this.events.map((e) => e.id)) + 1;
      const event: Event = { id: nextId, ...data };
      this.events.push(event);
      return event;
    });
  }
}
