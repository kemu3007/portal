import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolsRoutingModule {}
