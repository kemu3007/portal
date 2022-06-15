import { SnippetListComponent } from './snippet-list/snippet-list.component';
import { SnippetRoutingModule } from './snippet-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [SnippetListComponent],
  imports: [CommonModule, SnippetRoutingModule, SharedModule],
})
export class SnippetModule {}
