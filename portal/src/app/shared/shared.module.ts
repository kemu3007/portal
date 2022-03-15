import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetBtnComponent } from './tweet-btn/tweet-btn.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [TweetBtnComponent],
  imports: [CommonModule, NgbModule],
  exports: [TweetBtnComponent, NgbModule],
})
export class SharedModule {}
