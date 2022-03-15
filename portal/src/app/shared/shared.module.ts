import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetBtnComponent } from './tweet-btn/tweet-btn.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageComponent } from './message/message.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [TweetBtnComponent, MessageComponent, LoadingComponent],
  imports: [CommonModule, NgbModule],
  exports: [TweetBtnComponent, NgbModule, MessageComponent, LoadingComponent],
})
export class SharedModule {}
