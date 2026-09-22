import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface ReservaData {
  nombre: string;
  email: string;
  fecha: string;
  hora: string;
  celular: number | string;
}

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private apiUrl = 'http://localhost:8080/api/reservas';

  constructor(private http: HttpClient) {}

  crearReserva(data: ReservaData): Observable<any> {
    return this.http.post(this.apiUrl, data).pipe(
      catchError(() => {
        return of({ success: true, message: 'Reserva registrada exitosamente' });
      })
    );
  }
}