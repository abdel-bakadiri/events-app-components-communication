import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as eventIt from '../../assets/api/events.json';

@Injectable({
  providedIn: 'root',
})
export class DbCreatorEventsItService implements InMemoryDbService {
  createDb() {
    const eventsIt = eventIt.default;
    return { eventsIt };
  }
}
