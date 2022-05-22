import { LogDetailComponent } from './log-detail/log-detail.component';
import { LogListComponent } from './log-list/log-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LogListComponent },
  { path: ':id', component: LogDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogRoutingModule {}
