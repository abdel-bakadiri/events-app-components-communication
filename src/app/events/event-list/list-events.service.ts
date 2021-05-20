import { Injectable } from '@angular/core';
import { EventIt } from 'src/app/models/event';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ListEventsService {
  private URL = 'assets/api/events.json';
  constructor(private httpClient: HttpClient) {}
  getEvents(): Observable<EventIt[]> {
    return this.httpClient
      .get<EventIt[]>(this.URL)
      .pipe(catchError(this.handelError));
  }
  handelError(err: HttpErrorResponse) {
    let messageError;
    if (err instanceof ErrorEvent) {
      messageError = `A network or client error `;
    } else {
      messageError = `Message code ${err.status} with message ${err.message}`;
    }
    return throwError(messageError);
  }
  getEventById(id: number): Observable<EventIt> {
    return this.getEvents().pipe(
      map((eventsIt: EventIt[]) =>
        eventsIt.find((eventIt) => eventIt.id === id)
      )
    );
  }
}
