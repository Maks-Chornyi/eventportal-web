import {Injectable} from '@angular/core';
import {Event} from '../Event';
import {Http} from '@angular/http';
import {HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HomeService {



  constructor(private http: Http) {}

  addNewEvent(event: Event) {
    return this.http.post('/api/event', event);
  }

  getEvents() {
    return this.http.get('/api/event')
      .pipe(map((response) => response.json()))
      .pipe(map(events => {
        return events.map((event) => {
          return {
            id: event.id,
            title: event.title,
            description: event.description,
            imageUrl: event.imageUrl
          };
        });
      }));
  }
}
