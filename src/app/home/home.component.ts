import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  events = [];

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.homeService.getEvents().subscribe(events => {
    this.events = events; });
  }


}
