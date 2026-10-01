import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

/** Latencia simulada (ms). Se retirará al conectar el backend. */
export const MOCK_DELAY = 300;

/**
 * Simula una petición HTTP: ejecuta `resolver` tras un pequeño retraso.
 * Si `resolver` lanza un error, el Observable emite error.
 */
export function mockRequest<T>(resolver: () => T): Observable<T> {
  return timer(MOCK_DELAY).pipe(map(resolver));
}
