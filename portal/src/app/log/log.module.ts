import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogRoutingModule } from './log-routing.module';
import { AdsenseModule } from 'ng2-adsense';
import { LogDetailComponent } from './log-detail/log-detail.component';
import { LogListComponent } from './log-list/log-list.component';

@NgModule({
  declarations: [LogListComponent, LogDetailComponent],
  imports: [
    CommonModule,
    LogRoutingModule,
    AdsenseModule.forRoot({ adClient: 'ca-pub-6219032039771696' }),
  ],
})
export class LogModule {}
