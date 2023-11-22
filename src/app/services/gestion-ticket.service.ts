import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../model/ticket';

@Injectable({
  providedIn: 'root'
})
export class GestionTicketService {

  apiUrl='http://localhost:9090/Cinema_Gestion'
  constructor(private http: HttpClient) { }
  
  createTicket(ticket: Ticket): Observable<Object> {
    return this.http.post<Ticket>(`${this.apiUrl}/Ticket/create`, ticket);
  }
  
}
