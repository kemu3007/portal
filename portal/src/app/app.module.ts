import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageComponent } from './message/message.component';
import { AdsenseModule } from 'ng2-adsense';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent, MessageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AdsenseModule.forRoot({ adClient: 'ca-pub-6219032039771696' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
