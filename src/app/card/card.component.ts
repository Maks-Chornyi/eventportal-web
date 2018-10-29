import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventPageComponent} from '../event-page/event-page.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() event;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  OnClick(id) {
    this.route.navigate(['event' , id]);
  }

}
