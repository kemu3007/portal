import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogDetailComponent } from './log-detail/log-detail.component';
import { LogListComponent } from './log-list/log-list.component';

const routes: Routes = [
  { path: '', component: LogListComponent },
  { path: ':id', component: LogDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogRoutingModule {}
