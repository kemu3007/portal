import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsRoutingModule } from './tools-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { ToolsListComponent } from './tools-list/tools-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AmazonAssociateComponent } from './amazon-associate/amazon-associate.component';
import { JsonTyperComponent } from './json-typer/json-typer.component';
import { RealtimeComponent } from './realtime/realtime.component';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { Base64Component } from './base64/base64.component';
import { MdwriterComponent } from './mdwriter/mdwriter.component';
import { RegexComponent } from './regex/regex.component';
import { YearCheckComponent } from './year-check/year-check.component';
import { OpenapiComponent } from './openapi/openapi.component';
import { MermaidComponent } from './mermaid/mermaid.component';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    ToolsListComponent,
    UserInfoComponent,
    AmazonAssociateComponent,
    JsonTyperComponent,
    RealtimeComponent,
    JsonFormatterComponent,
    Base64Component,
    MdwriterComponent,
    RegexComponent,
    YearCheckComponent,
    OpenapiComponent,
    MermaidComponent,
  ],
  imports: [CommonModule, SharedModule, ToolsRoutingModule],
})
export class ToolsModule {}
