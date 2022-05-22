import { LogDetailComponent } from './log-detail/log-detail.component';
import { LogListComponent } from './log-list/log-list.component';
import { LogRoutingModule } from './log-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [LogListComponent, LogDetailComponent],
  imports: [CommonModule, LogRoutingModule, SharedModule],
})
export class LogModule {}
