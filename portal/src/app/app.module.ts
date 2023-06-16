import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
// import { APP_BASE_HREF } from '@angular/common';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, UrlSerializer } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScullyLibModule } from '@scullyio/ng-lib';
import * as Sentry from '@sentry/angular';
import { TrailingSlashUrlSerializer } from './url-serializer';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, SharedModule, BrowserAnimationsModule, ScullyLibModule],
  providers: [
    // { provide: APP_BASE_HREF, useValue: '/tech' },
    { provide: UrlSerializer, useClass: TrailingSlashUrlSerializer },
    { provide: MAT_DATE_LOCALE, useValue: 'ja' },
    { provide: ErrorHandler, useValue: Sentry.createErrorHandler({ showDialog: false }) },
    { provide: Sentry.TraceService, deps: [Router] },
    { provide: APP_INITIALIZER, useFactory: () => () => {}, deps: [Sentry.TraceService], multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
