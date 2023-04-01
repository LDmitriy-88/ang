import { Injectable } from '@angular/core';
import { ITour } from 'src/app/models/tours';
import { Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketRestService {

  constructor (private http: HttpClient) { }

  getTickets(): Observable <ITour[]>{
    return this.http.get <ITour[]>('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/tours/');
  }
}
