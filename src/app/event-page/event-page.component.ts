import { Component, OnInit } from '@angular/core';
import {Event} from '../Event';
import {EventPageService} from './event-page.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss'],
  providers: [EventPageService]
})
export class EventPageComponent implements OnInit {

  event: Event;

  constructor(private route: ActivatedRoute,
       private eventService: EventPageService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');



    return this.eventService.getEventById(id).subscribe( event =>
    this.event = event );
  }
}
