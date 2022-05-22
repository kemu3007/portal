import { ContactComponent } from './contact/contact.component';
import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { NewsComponent } from './news/news.component';
import { ToolsListComponent } from './tools-list/tools-list.component';
import { CommonModule, KeyValuePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [IndexComponent, ContactComponent, NewsComponent, ToolsListComponent],
  imports: [CommonModule, HomeRoutingModule, NgbModule, RecaptchaModule, SharedModule],
  providers: [KeyValuePipe],
})
export class HomeModule {}
