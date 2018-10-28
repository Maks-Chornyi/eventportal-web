import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventPageComponent } from './event-page/event-page.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    EventPageComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
