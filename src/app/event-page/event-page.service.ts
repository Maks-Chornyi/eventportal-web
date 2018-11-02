import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable()
export class EventPageService {

  constructor(private http: Http) {
  }

  getEventById(id) {
    return this.http.get('/api/event/' + id)
      .pipe(map(response => response.json()))
      .pipe(map(event => {
        return {
          id: event.id,
          title: event.title,
          description: event.description,
          imageUrl: event.imageUrl,
          date: event.date,
          place: event.place
        };
      }));
  }
}
