import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BlogListComponent, data: { lang: 'ja' } },
  { path: 'en', component: BlogListComponent, data: { lang: 'en' } },
  { path: ':id', component: BlogDetailComponent, data: { lang: 'ja' } },
  { path: 'en/:id', component: BlogDetailComponent, data: { lang: 'en' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
