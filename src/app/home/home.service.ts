import {Injectable} from '@angular/core';
import {Event} from '../event';
import {Http} from '@angular/http';
import {HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HomeService {



  constructor(private http: Http) {}

  addNewEvent(event: Event) {
    return this.http.post('/api/event', event);
  }
}
