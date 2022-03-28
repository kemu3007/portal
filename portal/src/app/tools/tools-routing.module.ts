import { DecimalPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmazonAssociateComponent } from './amazon-associate/amazon-associate.component';
import { Base64Component } from './base64/base64.component';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';
import { JsonTyperComponent } from './json-typer/json-typer.component';
import { RealtimeComponent } from './realtime/realtime.component';
import { ToolsListComponent } from './tools-list/tools-list.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  {
    path: '',
    component: ToolsListComponent,
  },
  {
    path: 'userInfo',
    component: UserInfoComponent,
  },
  {
    path: 'amazonAssociate',
    component: AmazonAssociateComponent,
  },
  {
    path: 'jsonTyper',
    component: JsonTyperComponent,
  },
  {
    path: 'realtime',
    component: RealtimeComponent,
  },
  {
    path: 'jsonFormatter',
    component: JsonFormatterComponent,
  },
  {
    path: 'base64',
    component: Base64Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DecimalPipe],
})
export class ToolsRoutingModule {}
