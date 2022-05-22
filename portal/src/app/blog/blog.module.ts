import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogRoutingModule } from './blog-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [BlogListComponent, BlogDetailComponent],
  imports: [CommonModule, BlogRoutingModule, SharedModule],
})
export class BlogModule {}
