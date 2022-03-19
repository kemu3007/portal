import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogRoutingModule } from './log-routing.module';
import { LogDetailComponent } from './log-detail/log-detail.component';
import { LogListComponent } from './log-list/log-list.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [LogListComponent, LogDetailComponent],
  imports: [CommonModule, LogRoutingModule, SharedModule],
})
export class LogModule {}
