export interface Event {
  id: number;
  nombre: string;
  descripcion: string;
  /** Fecha en formato ISO (YYYY-MM-DD). */
  fecha: string;
  lugar: string;
  precio: number;
  cupos: number;
  /** Id del agente que registró el evento. */
  agenteId: number;
}

/** Datos para registrar un evento (el id lo asigna el servicio). */
export type NewEvent = Omit<Event, 'id'>;
