import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { ToolsListComponent } from './tools-list/tools-list.component';

@NgModule({
  declarations: [ToolsListComponent],
  imports: [CommonModule, SharedModule, ToolsRoutingModule],
})
export class ToolsModule {}
