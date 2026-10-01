import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemReport } from '@/models';
import { ReportService } from '@/services';

@Injectable({ providedIn: 'root' })
export class ReportController {
  private readonly service = inject(ReportService);

  /** Administrador: datos para gráficas y tablas. */
  getSystemReport(): Observable<SystemReport> {
    return this.service.getSystemReport();
  }
}
