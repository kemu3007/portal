import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetBtnComponent } from './tweet-btn/tweet-btn.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageComponent } from './message/message.component';
import { LoadingComponent } from './loading/loading.component';
import { AdsenseComponent } from './adsense/adsense.component';
import { AdsenseModule } from 'ng2-adsense';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { environment } from '@environments/environment';

@NgModule({
  declarations: [TweetBtnComponent, MessageComponent, LoadingComponent, AdsenseComponent, NavComponent],
  imports: [CommonModule, NgbModule, AdsenseModule.forRoot({ adClient: environment.adClient }), RouterModule],
  exports: [TweetBtnComponent, NgbModule, MessageComponent, LoadingComponent, AdsenseComponent, NavComponent],
})
export class SharedModule {}
