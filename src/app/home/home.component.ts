import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service';
import {Event} from '../Event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ HomeService ]
})
export class HomeComponent implements OnInit {

  event: Event;
  title: string;
  description: string;
  imageUrl: string;
  place: string;
  events = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getEvents().subscribe(events => {
    this.events = events; });
  }

  addNewEvent() {
    this.event = new Event(this.title, this.description, this.imageUrl, this.place);
    console.log(this.event);
    this.homeService.addNewEvent(this.event).subscribe();
  }

}
