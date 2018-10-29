import {map} from 'rxjs/operators';
import {Http} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class  HomeService {

  constructor(private http: Http) {
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
