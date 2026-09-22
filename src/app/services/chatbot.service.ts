import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  private apiUrl = 'http://localhost:8080/api/chat';

  constructor(private http: HttpClient) {}

  enviarMensaje(texto: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/send`, { mensaje: texto }).pipe(
      catchError(() => {
        return of({ mensaje: '¡Hola! Gracias por comunicarte con NuTaTaMo Spa. ¿Te gustaría agendar una cita o conocer nuestros servicios?' });
      })
    );
  }
}
