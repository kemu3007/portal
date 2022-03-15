import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetBtnComponent } from './tweet-btn/tweet-btn.component';

@NgModule({
  declarations: [TweetBtnComponent],
  imports: [CommonModule],
  exports: [TweetBtnComponent],
})
export class SharedModule {}
