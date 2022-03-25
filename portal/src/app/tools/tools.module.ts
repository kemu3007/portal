import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { ToolsListComponent } from './tools-list/tools-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AmazonAssociateComponent } from './amazon-associate/amazon-associate.component';
import { JsonTyperComponent } from './json-typer/json-typer.component';
import { RealtimeComponent } from './realtime/realtime.component';

@NgModule({
  declarations: [
    ToolsListComponent,
    UserInfoComponent,
    AmazonAssociateComponent,
    JsonTyperComponent,
    RealtimeComponent,
  ],
  imports: [CommonModule, SharedModule, ToolsRoutingModule],
})
export class ToolsModule {}
