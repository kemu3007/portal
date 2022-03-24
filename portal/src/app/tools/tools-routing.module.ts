import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmazonAssociateComponent } from './amazon-associate/amazon-associate.component';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolsRoutingModule {}
